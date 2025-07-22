/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
  const found = new Set();
  let left = 0;
  let currentSum = 0;
  let max = 0;

  for (let right = 0; right < nums.length; right++) {
    while (found.has(nums[right])) {
      found.delete(nums[left]);
      currentSum -= nums[left];
      left++;
    }
    found.add(nums[right]);
    currentSum += nums[right];
    max = Math.max(max, currentSum);
  }

  return max;
};