"""Event-driven numpy re-implementation of the leaky integrate-and-fire model of the
whole adult Drosophila brain (Shiu et al., Nature 2024, https://github.com/philshiu/Drosophila_brain_model).

Same equations and constants as the original Brian 2 model (model.py in that repo):
  dv/dt = (v_0 - v + g) / t_mbr,  dg/dt = -g / tau,  spike at v > v_th, reset v = v_rst and g = 0,
  synaptic input g += w * (signed synapse count), delay 1.8 ms, refractory period 2.2 ms,
  stimulated neurons get Poisson input that makes them spike at the given rate.
Only the neurons that currently carry a non-zero state are updated, which is why one
second of brain time takes a few seconds on a laptop instead of minutes.
"""
import numpy as np
import pandas as pd

DT = 0.1                        # ms
V0, VTH = -52.0, -45.0          # mV
TAU_M, TAU_S = 20.0, 5.0        # ms
T_REF = 2.2                     # ms
DELAY_STEPS = 18                # 1.8 ms
W_SYN = 0.275                   # mV per synapse
POISSON_KICK = W_SYN * 250      # mV, enough to cause a spike
TH = VTH - V0                   # threshold relative to rest
E_M, E_S = np.exp(-DT / TAU_M), np.exp(-DT / TAU_S)
REF_STEPS = int(round(T_REF / DT))


class Brain:
    def __init__(self, comp_csv, conn_parquet):
        comp = pd.read_csv(comp_csv, index_col=0)
        self.ids = comp.index.values.astype(np.int64)
        self.n = len(self.ids)
        self.id2i = {int(f): i for i, f in enumerate(self.ids)}
        con = pd.read_parquet(conn_parquet, columns=['Presynaptic_Index', 'Postsynaptic_Index', 'Excitatory x Connectivity'])
        pre = con['Presynaptic_Index'].values.astype(np.int32)
        post = con['Postsynaptic_Index'].values.astype(np.int32)
        w = (con['Excitatory x Connectivity'].values * W_SYN).astype(np.float32)
        del con
        order = np.argsort(pre, kind='stable')
        self.post = post[order]
        self.w = w[order]
        counts = np.bincount(pre, minlength=self.n)
        self.indptr = np.concatenate([[0], np.cumsum(counts)]).astype(np.int64)
        del pre, post, w, order

    def idx(self, flywire_ids):
        return np.array([self.id2i[int(i)] for i in flywire_ids], dtype=np.int64)

    def _targets(self, spk):
        starts, ends = self.indptr[spk], self.indptr[spk + 1]
        lens = ends - starts
        total = int(lens.sum())
        if total == 0:
            return None, None
        offs = np.repeat(starts - np.concatenate([[0], np.cumsum(lens)[:-1]]), lens) + np.arange(total)
        return self.post[offs], self.w[offs]

    def run(self, stim, t_ms=500.0, seed=0, silence=None):
        """stim: list of (neuron_indices, rate_hz). Returns spike times (ms) per neuron as (ids, steps)."""
        rng = np.random.default_rng(seed)
        n = self.n
        u = np.zeros(n, dtype=np.float32)       # v - v_0
        g = np.zeros(n, dtype=np.float32)
        refr = np.zeros(n, dtype=np.int16)
        act = np.zeros(n, dtype=bool)
        poi = np.zeros(n, dtype=bool)
        groups = []
        for idxs, rate in stim:
            groups.append((np.asarray(idxs), rate * DT * 1e-3))
            poi[idxs] = True
        silenced = np.zeros(n, dtype=bool)
        if silence is not None and len(silence):
            silenced[np.asarray(silence)] = True
        ring = [[] for _ in range(DELAY_STEPS + 1)]
        steps = int(round(t_ms / DT))
        rec_i, rec_t = [], []
        for t in range(steps):
            for idxs, p in groups:
                hit = idxs[rng.random(len(idxs)) < p]
                if len(hit):
                    u[hit] += POISSON_KICK
                    act[hit] = True
            slot = ring[t % (DELAY_STEPS + 1)]
            A = np.flatnonzero(act)
            if len(A):
                free = refr[A] == 0
                A_f = A[free]
                gu = g[A_f] / 3.0
                u[A_f] = (u[A_f] + gu) * E_M - gu * E_S
                g[A_f] *= E_S
                rA = A[~free]
                refr[rA] -= 1
                spk = A_f[u[A_f] > TH]
            else:
                spk = A
            if slot:
                tg = np.concatenate([s[0] for s in slot])
                wt = np.concatenate([s[1] for s in slot])
                if len(tg) > 3000:
                    g += np.bincount(tg, weights=wt, minlength=n).astype(np.float32)
                else:
                    np.add.at(g, tg, wt)
                act[tg] = True
                slot.clear()
            if len(spk):
                u[spk] = 0.0
                g[spk] = 0.0
                refr[spk] = np.where(poi[spk], 0, REF_STEPS).astype(np.int16)
                rec_i.append(spk.copy())
                rec_t.append(np.full(len(spk), t, dtype=np.int32))
                send = spk[~silenced[spk]]
                if len(send):
                    tg, wt = self._targets(send)
                    if tg is not None:
                        ring[(t + DELAY_STEPS) % (DELAY_STEPS + 1)].append((tg, wt))
            if len(A):
                quiet = (np.abs(u[A]) < 1e-3) & (np.abs(g[A]) < 1e-3) & (refr[A] == 0)
                q = A[quiet]
                u[q] = 0.0
                g[q] = 0.0
                act[q] = False
        if rec_i:
            return np.concatenate(rec_i), np.concatenate(rec_t)
        return np.zeros(0, dtype=np.int64), np.zeros(0, dtype=np.int32)
