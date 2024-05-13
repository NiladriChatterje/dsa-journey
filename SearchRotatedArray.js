/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {

    let left = 0, right = nums.length - 1;
    let midIndex;
    while (left <= right) {
        midIndex = Math.trunc(left + (right - left) / 2);
        if (nums[midIndex] === target) return midIndex;

        if (nums[midIndex] < nums[right]) {
            if (nums[midIndex] <= target && nums[right] >= target)
                left = midIndex + 1;
            else right = midIndex - 1;
        }
        else {
            if (nums[midIndex] >= target && nums[left] <= target)
                right = midIndex - 1;
            else left = midIndex + 1

        }
    }
    return -1
};