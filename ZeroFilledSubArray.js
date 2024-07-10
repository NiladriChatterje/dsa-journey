var zeroFilledSubarray = function (nums) {
    let subArrayCountWhenZero = 0;
    let total = 0;
    for (let i of nums) {
        if (i === 0)
            subArrayCountWhenZero++;
        else {
            total += subArrayCountWhenZero * (subArrayCountWhenZero + 1) / 2;
            subArrayCountWhenZero = 0
        }
    }
    if (subArrayCountWhenZero !== 0)
        total += subArrayCountWhenZero * (subArrayCountWhenZero + 1) / 2;

    return total
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));