const searchInsert = function (nums, target) {
    //Binary Search :)
    if (target > nums[nums.length - 1]) return nums.length - 1
    let left = 0, right = nums.length;
    let midIndex = parseInt(left + (right - left) / 2);
    while (left <= right) {
        if (target === nums[midIndex]) return midIndex;
        if (target < nums[midIndex])
            right = midIndex - 1;
        else
            left = midIndex + 1;

        midIndex = parseInt(left + (right - left) / 2);
    }
    return left
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3], 2))