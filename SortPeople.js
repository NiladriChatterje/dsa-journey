`2418 leetcode`

var sortPeople = function (names, heights) {
    const arr = heights.map((item, i) => [item, names[i]]);

    arr.sort((a, b) => b[0] - a[0]);

    return arr.map(item => item[1]);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
