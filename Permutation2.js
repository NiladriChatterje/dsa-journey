const permuteUnique = function (nums, result = [], arr = [], map = new Map(), uniqueMap = new Map(), remaining = nums.length) {
    if (remaining === 0) {
        if (!uniqueMap.has(`${arr}`)) {
            result.push([...arr]);
            uniqueMap.set(`${arr}`, true)
        }
        return result
    };

    for (let i = 0; i < nums.length; i++) {
        if (map.has(i)) continue;
        map.set(i, true);
        arr.push(nums[i]);
        permuteUnique(nums, result, arr, map, uniqueMap, remaining - 1);
        map.delete(i);
        arr.pop()

    }

    return result;
};


console.log(permuteUnique([1, 2, 3]))
console.log(permuteUnique([1, 1, 2]))