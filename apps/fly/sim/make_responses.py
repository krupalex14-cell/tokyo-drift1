"""Runs the real FlyWire connectome (via fast_lif.py) for a grid of stimuli and stores what the web page needs.

Usage:
  python make_responses.py DATA_DIR OUT_DIR single      # single-stimulus runs, picks the neurons to display
  python make_responses.py DATA_DIR OUT_DIR pairs       # combined stimuli (sugar+bitter, sugar+water, bitter+water)
  python make_responses.py DATA_DIR OUT_DIR final       # layout + one responses.json for the page

DATA_DIR holds 2023_03_23_completeness_630_final.csv and 2023_03_23_connectivity_630_final.parquet
from https://github.com/philshiu/Drosophila_brain_model
"""
import sys, json, time, itertools
from pathlib import Path
import numpy as np
sys.path.insert(0, str(Path(__file__).resolve().parent))
from fast_lif import Brain, DT

LEVELS = [0, 50, 100, 150, 200]
T_MS, SKIP_MS, SEEDS = 400.0, 100.0, 3
HERE = Path(__file__).parent
SETS = json.load(open(HERE / 'neuron_sets.json'))
SETS['sugar'] = SETS['sugar_R'] + SETS['sugar_L']
KEYS = ['mn9_L', 'mn9_R', 'aBN1', 'dn1_1', 'dn2_l']


def rates(brain, stim_names_rates, seeds=SEEDS):
    stim = [(brain.idx(SETS[n]), r) for n, r in stim_names_rates if r > 0]
    cnt = np.zeros(brain.n)
    win = (T_MS - SKIP_MS) / 1000.0
    for s in range(seeds):
        i, t = brain.run(stim, t_ms=T_MS, seed=1000 + s)
        keep = t * DT >= SKIP_MS
        cnt += np.bincount(i[keep], minlength=brain.n)
    return cnt / seeds / win


def main():
    data, out, mode = Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3]
    out.mkdir(parents=True, exist_ok=True)
    t0 = time.time()
    brain = Brain(data / '2023_03_23_completeness_630_final.csv', data / '2023_03_23_connectivity_630_final.parquet')
    print('loaded', round(time.time() - t0, 1), 's', flush=True)
    keyidx = {k: brain.id2i[SETS[k][0]] for k in KEYS}

    if mode == 'single':
        for name in ['sugar', 'bitter', 'water', 'jon_all']:
            for lv in LEVELS[1:]:
                t = time.time()
                r = rates(brain, [(name, lv)])
                np.save(out / f'single_{name}_{lv}.npy', r.astype(np.float32))
                print(name, lv, 'Hz: active', int((r > 0).sum()), {k: round(float(r[v]), 1) for k, v in keyidx.items()}, round(time.time() - t, 1), 's', flush=True)

    elif mode == 'pairs':
        sel = sys.argv[4] if len(sys.argv) > 4 else None
        for a, b in [('sugar', 'bitter'), ('sugar', 'water'), ('bitter', 'water')]:
            if sel and sel != f'{a}_{b}':
                continue
            grid = {k: np.zeros((len(LEVELS), len(LEVELS))) for k in KEYS}
            nact = np.zeros((len(LEVELS), len(LEVELS)))
            for i, la in enumerate(LEVELS):
                for j, lb in enumerate(LEVELS):
                    if la == 0 and lb == 0:
                        continue
                    r = rates(brain, [(a, la), (b, lb)])
                    for k, v in keyidx.items():
                        grid[k][i, j] = r[v]
                    nact[i, j] = (r > 0).sum()
                print(a, b, 'row', la, 'done', round(time.time() - t0), 's', flush=True)
            np.savez(out / f'pair_{a}_{b}.npz', nact=nact, **grid)

    elif mode == 'final':
        build_final(brain, keyidx, out)


def build_final(brain, keyidx, out):
    from scipy.sparse import csr_matrix, diags
    from scipy.sparse.linalg import eigsh
    names = ['sugar', 'bitter', 'water', 'jon_all']
    single = {n: {lv: np.load(out / f'single_{n}_{lv}.npy') for lv in LEVELS[1:]} for n in names}
    score = np.zeros(brain.n)
    for n in names:
        score = np.maximum(score, single[n][150])
    must = set()
    for n in names:
        must |= set(brain.idx(SETS[n]).tolist())
    must |= set(keyidx.values())
    order = [i for i in np.argsort(-score) if score[i] >= 2.0 and i not in must]
    disp = sorted(must) + order[: max(0, 700 - len(must))]
    disp = np.array(disp)
    pos_in_disp = {int(i): k for k, i in enumerate(disp)}
    rows, cols, vals = [], [], []
    for k, i in enumerate(disp):
        s, e = brain.indptr[i], brain.indptr[i + 1]
        tg, w = brain.post[s:e], brain.w[s:e]
        for t, ww in zip(tg, w):
            j = pos_in_disp.get(int(t))
            if j is not None and j != k:
                rows.append(k); cols.append(j); vals.append(float(ww))
    rows, cols, vals = np.array(rows), np.array(cols), np.array(vals)
    A = csr_matrix((np.abs(vals), (rows, cols)), shape=(len(disp), len(disp)))
    S = A + A.T
    d = np.asarray(S.sum(1)).ravel() + 1e-9
    L = diags(1.0 / np.sqrt(d)) @ (diags(d) - S) @ diags(1.0 / np.sqrt(d))
    vals_e, vecs = eigsh(L, k=5, which='SM')
    coords = vecs[:, 1:4] / np.sqrt(d)[:, None]
    coords = (coords - np.median(coords, 0)) / (np.percentile(np.abs(coords - np.median(coords, 0)), 90, axis=0) + 1e-9)
    coords = np.clip(coords, -2.2, 2.2)
    top = np.argsort(-np.abs(vals))[:2600]
    edges = [[int(rows[t]), int(cols[t]), int(np.sign(vals[t])), round(float(abs(vals[t])), 2)] for t in top]
    role = []
    group_of = {}
    for g, ids in [('sugar', SETS['sugar']), ('bitter', SETS['bitter']), ('water', SETS['water']), ('jon', SETS['jon_all'])]:
        for i in brain.idx(ids):
            group_of[int(i)] = g
    keyname = {v: k for k, v in keyidx.items()}
    for i in disp:
        i = int(i)
        role.append(keyname.get(i) or group_of.get(i) or '')
    resp = {st: {str(lv): [round(float(single[st][lv][i]), 1) for i in disp] for lv in LEVELS[1:]} for st in names}
    pairs = {}
    for a, b in [('sugar', 'bitter'), ('sugar', 'water'), ('bitter', 'water')]:
        z = np.load(out / f'pair_{a}_{b}.npz')
        pairs[f'{a}_{b}'] = {k: np.round(z[k], 1).tolist() for k in KEYS + ['nact']}
    single_keys = {}
    for n in names:
        single_keys[n] = {k: [0.0] + [round(float(single[n][lv][keyidx[k]]), 1) for lv in LEVELS[1:]] for k in KEYS}
        single_keys[n]['nact'] = [0] + [int((single[n][lv] > 0).sum()) for lv in LEVELS[1:]]
    result = {
        'about': 'Responses of the real FlyWire adult female Drosophila brain (630 materialization, 127,400 neurons, 14.7M synapses) '
                 'in the leaky integrate-and-fire model of Shiu et al. 2024, simulated with sim/fast_lif.py.',
        'levels_hz': LEVELS, 'keys': KEYS,
        'nodes': {'flywire_id': [str(int(brain.ids[i])) for i in disp], 'role': role,
                  'xyz': np.round(coords, 2).tolist()},
        'edges': edges, 'node_rates': resp, 'single_keys': single_keys, 'pairs': pairs,
        'groups': {k: len(v) for k, v in SETS.items() if k in ('sugar', 'bitter', 'water', 'jon_all')},
    }
    json.dump(result, open(out / 'responses.json', 'w'), separators=(',', ':'))
    print('nodes', len(disp), 'edges', len(edges), 'size KB', round((out / 'responses.json').stat().st_size / 1024))


if __name__ == '__main__':
    main()
