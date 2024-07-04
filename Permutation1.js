const permute = function (nums, result = [], arr = [], map = new Map(), remaining = nums.length) {
    if (remaining === 0) {
        result.push([...arr]);
        return result
    };

    for (let i of nums) {
        if (map.has(i)) continue;
        map.set(i, true);
        arr.push(i);
        permute(nums, result, arr, map, remaining - 1);
        map.delete(i);
        arr.pop()

    }

    return result;
};


console.log(permute([1, 2, 3]))