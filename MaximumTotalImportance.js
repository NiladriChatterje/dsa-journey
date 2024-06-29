var maximumImportance = function (n, roads) {
    let res = 0, cost = 1;
    let conn = new Array(n).fill(0);

    for (const road of roads) {
        conn[road[0]]++;
        conn[road[1]]++;
    }

    conn.sort((a, b) => a - b);

    for (const con of conn) {
        res += con * cost++;
    }
    return res;
};
console.log(maximumImportance(5, [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]))