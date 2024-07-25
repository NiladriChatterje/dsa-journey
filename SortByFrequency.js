var frequencySort = function (nums) {
    const map = new Map();
    for (let i of nums)
        map.set(i, (map.get(i) ?? 0) + 1);

    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]))