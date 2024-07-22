/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const arr = heights.map((item, i) => [item, names[i]]);

    arr.sort((a, b) => b[0] - a[0]);

    return arr.map(item => item[1]);
};