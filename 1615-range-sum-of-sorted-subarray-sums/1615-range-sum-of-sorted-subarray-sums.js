var rangeSum = function (nums, n, left, right) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            result.push(sum)
        }
        sum = 0;
    }
    result.sort((a, b) => a - b);
    sum = 0;
  for (let i = left - 1; i < right; i++)
        sum += result[i];

    return sum%(10**9+7)
};