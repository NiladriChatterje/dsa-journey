const searchRange = function (nums, target) {
    let first = -1, last = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && first === -1) first = i;
        if (nums[nums.length - 1 - i] === target && last === -1) last = nums.length - 1 - i;

        if (first !== -1 && last !== -1) return [first, last];
    }
    return [first, last]
};