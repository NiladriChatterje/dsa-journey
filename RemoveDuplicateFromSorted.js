const removeDuplicates = function (nums) {
    const map = new Map();
    const result = [];
    let count = 0;
    for (let i of nums) {
        if (!map.has(i)) {
            result.push(i);
            count++;
            map.set(i, true);
        }
    }
    nums.length = 0;
    nums.push(...result)
    return count
};

console.log(removeDuplicates([1, 1, 2]))