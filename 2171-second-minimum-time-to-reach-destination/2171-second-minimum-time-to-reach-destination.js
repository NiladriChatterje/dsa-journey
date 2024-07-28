/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
const initializeGraph = (n) => {
    let G = new Array(n).fill(null).map(() => []);
    return G;
};

const addEdgeToG = (G, Edges) => {
    for (const [u, v] of Edges) {
        G[u].push(v);
        G[v].push(u);
    }
};

const secondMinimum = (n, edges, time, change) => {
    let adj = initializeGraph(n + 1);
    addEdgeToG(adj, edges);

    // Array to store costs with max length of 2
    let cost = Array.from({ length: n + 1 }, () => []);
    let pq = new MinPriorityQueue({ priority: x => x[0] });
    pq.enqueue([0, 1]);

    let green = 2 * change;

    while (pq.size()) {
        let [t, node] = pq.dequeue().element;
        if (cost[node].length === 2) continue;

        let nextT = t % green < change ? t : Math.floor((t + green - 1) / green) * green;

        if (node === n) {
            if (cost[node].length === 0 || cost[node][cost[node].length - 1] !== t) {
                cost[node].push(t);
            } else {
                continue;
            }
        } else {
            if (cost[node].length === 0 || cost[node][cost[node].length - 1] !== nextT) {
                cost[node].push(nextT);
            } else {
                continue;
            }
        }

        for (const next_node of adj[node]) {
            pq.enqueue([nextT + time, next_node]);
        }
    }

    return cost[n][1];
};