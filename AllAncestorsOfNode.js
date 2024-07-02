`leetcode 2192`

var getAllAncestors = (node, map, arr = [], duplicateCheck = new Map()) => {
    if (!map.has(node) || (map.has(node) && map.get(node).length === 0))
        return arr;

    for (let i of map.get(node)) {
        if (!duplicateCheck.has(i)) {
            arr.push(i)
            getAllAncestors(i, map, arr, duplicateCheck);
            duplicateCheck.set(i, true)
        }
    }

    return arr;
}

var getAncestors = function (n, edges) {
    const map = new Map();
    for (const [a, b] of edges) {
        if (map.has(b))
            map.get(b).push(a);
        else map.set(b, [a]);

        if (!map.has(a))
            map.set(a, []);
    }
    const result = [];
    for (let i = 0; i < n; i++)
        result.push(getAllAncestors(i, map));

    for (const ele of result)
        ele.sort((a, b) => a - b)
    return result
};

console.log(getAncestors(8, [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]]))
console.log(getAncestors(5, [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]))
console.log(getAncestors(9,
    [[7, 5], [2, 5], [0, 7], [0, 1], [6, 1], [2, 4], [3, 5]]))