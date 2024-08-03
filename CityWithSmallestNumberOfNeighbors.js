
var findTheCity = function (n, edges, distanceThreshold) {
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++)
        dist[i][i] = 0;

    for (const [u, v, w] of edges) {
        dist[u][v] = w;
        dist[v][u] = w;
    }

    for (let k = 0; k < n; k++)
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])


    let minReachableCities = Infinity;
    let bestCity = -1;

    for (let i = 0; i < n; i++) {
        let reachableCities = 0;
        for (let j = 0; j < n; j++)
            if (dist[i][j] <= distanceThreshold)
                reachableCities++;

        if (reachableCities <= minReachableCities) {
            minReachableCities = reachableCities;
            bestCity = i;
        }
    }

    return bestCity;
};