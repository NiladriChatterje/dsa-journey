`leetcode 1509`
var minDifference = function (nums) {
    if (nums.length <= 4) return 0;

    nums.sort((a, b) => a - b);
    let answer = nums[nums.length - 1] - nums[0];
    for (let i = 0; i < 4; i++)
        answer = Math.min(answer, nums[nums.length - 4 + i] - nums[i])
    return answer
};

console.log(minDifference([5, 3, 2, 4]))
console.log(minDifference([1, 5, 0, 10, 14]))