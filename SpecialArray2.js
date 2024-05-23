const isArraySpecial = function (nums, queries) {
    const result = [];
    const maxRange = [];
    let maxRangeResult;
    let flag;
    for (let query of queries) {
        const [a, b] = query;
        const [c, d] = maxRange;

        if (a === b) {
            result.push(true);
            continue
        }

        if (c && d && (a >= c && b <= d)) {
            result.push(maxRangeResult);
            continue
        } else {
            maxRange.length = 0;
            maxRange.push(a, b);
        }

        flag = false
        for (let i = a; i < b; i++)
            if (!((nums[i] % 2 === 0 && nums[i + 1] & 2 !== 0) ||
                (nums[i] % 2 !== 0 && nums[i + 1] % 2 === 0))) {
                result.push(false);
                maxRangeResult = false;
                flag = true;
                break;
            }

        if (!flag) {
            result.push(true);
            maxRangeResult = true;
        }
    }

    return result;
};

console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]));
console.log(isArraySpecial([4, 3, 1, 6], [[0, 2], [2, 3]]));
console.log(isArraySpecial([10, 8, 8, 9],
    [[2, 3], [0, 1], [2, 3], [1, 3], [2, 2]]));