var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let mid, prevMid;
    while (left <= right) {
        mid = left + parseInt((right - left) / 2)
        if (target === nums[mid]) return mid;
        if (target > nums[mid])
            left = mid+1;
        if (target < nums[mid])
            right = mid-1;

        if (mid === prevMid)
            return -1

        prevMid = mid
    }
    return -1
};
