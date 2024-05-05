const sumOfDistancesInTree = function (n, edges) {
    if (n == 1) return [0];
    const distMap = {};
    const [u1, v1] = edges[0];


    distMap[u1] = new Map();
    distMap[v1] = new Map();
    distMap[u1].set(v1, 1);
    distMap[v1].set(u1, 1);

    const arr = [];
    const stack = [];
    let distance = 0;
    for (let i = 1; i < edges.length; i++) {
        let [u, v] = edges[i];

        if (!(u in distMap)) distMap[u] = new Map()
        if (!(v in distMap)) distMap[v] = new Map();

        distMap[u].set(v, 1);
        distMap[v].set(u, 1);
        let flag = true
        for (let j in distMap) {
            j = parseInt(j)

            if (!distMap[u].has(j) && distMap[v].has(j) && u != j) {
                distMap[u].set(j, distMap[j].get(v) + 1);
                distMap[j].set(u, distMap[v].get(j) + 1);
                flag = false
            }
            if (!distMap[v].has(j) && distMap[u].has(j) && v != j) {
                distMap[v].set(j, distMap[u].get(j) + 1);
                distMap[j].set(v, distMap[j].get(u) + 1);
                flag = false
            }

        }
        if (flag)
            stack.push(edges[i]);

    }

    while (stack.length) {
        const [u, v] = stack.pop();
        for (let j in distMap) {
            j = parseInt(j)

            if (!distMap[u].has(j) && distMap[v].has(j) && u != j) {
                distMap[u].set(j, distMap[j].get(v) + 1);
                distMap[j].set(u, distMap[v].get(j) + 1);
                flag = false
            }
            if (!distMap[v].has(j) && distMap[u].has(j) && v != j) {
                distMap[v].set(j, distMap[u].get(j) + 1);
                distMap[j].set(v, distMap[j].get(u) + 1);
                flag = false
            }
        }
    }
    for (let i in distMap) {
        distance = 0
        for (let [_, freq] of distMap[i])
            distance += freq;
        arr.push(distance)
    }

    return arr;
};

console.log(sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]))
console.log(sumOfDistancesInTree(4, [[2, 0], [3, 1], [2, 1]]))
console.log(sumOfDistancesInTree(3, [[2, 0], [1, 0]]))