const merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    const coincide = [intervals[0][0], intervals[0][1]];

    for (let i = 1; i < intervals.length; i++) {
        const [a, b] = intervals[i];

        if (coincide[1] >= a) {
            coincide[0] = a <= coincide[0] ? a : coincide[0];
            coincide[1] = b >= coincide[1] ? b : coincide[1];
        }
        else {
            result.push([...coincide]);
            coincide[0] = a;
            coincide[1] = b;
        }
    }
    const res_last = result.length - 1

    if (result.length === 0 || result[res_last][0] !== coincide[0] ||
        result[res_last][1] !== coincide[1])
        result.push(coincide)

    return result
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]))