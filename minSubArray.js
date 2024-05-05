const minSubArrayLen = function (target, nums) {
    if (nums.find(item => item >= target)) return 1;
    let start = 0;
    let end = 0;
    let minValue = Infinity;
    let subarraySum = nums[0];
    while (start <= end && end < nums.length) {
        if (subarraySum >= target) {
            minValue = Math.min(minValue, end - start + 1);
            subarraySum -= nums[start++];
        } else subarraySum += nums[++end];
    }
    return minValue === Infinity ? 0 : minValue;
};


console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]));
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))
console.log(minSubArrayLen(20, [2, 16, 14, 15]))