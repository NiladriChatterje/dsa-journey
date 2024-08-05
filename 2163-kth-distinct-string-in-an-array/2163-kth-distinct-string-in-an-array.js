/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = new Map();

    for (let i of arr)
        map.set(i, (map.get(i) ?? 0) + 1);

    for (let i of arr) {
        if (map.get(i) === 1)
            k--;

        if (k === 0)
            return i;
    }

    return "";
}; 