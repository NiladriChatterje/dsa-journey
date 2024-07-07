var findMaxLength = function (nums) {
    let ones = 0;
    let zeros = 0;
    const map = new Map();
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0)
            zeros++;
        else
            ones++

        if (!map.has(ones - zeros))
            map.set(ones - zeros, i);

        if (ones === zeros)
            res = ones + zeros;
        else {
            index = map.get(ones - zeros);
            res = Math.max(index, i - res)
        }
    }
    return res
};

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))