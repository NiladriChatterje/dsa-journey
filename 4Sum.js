const fourSum = function (nums, target) {
    if (nums.length < 4) return []
    const result = [];
    const map = new Map();
    const operation = []
    let left = 1, right = nums.length - 2;
    let l, r;

    while (left < right) {
        l = 0; r = nums.length - 1;
        while (l < r) {
            if ((l !== left && l !== right && l !== r && left !== r && r !== right)
                && (nums[l] + nums[r] + nums[left] + nums[right] === target)) {
                operation.push(nums[l], nums[r], nums[left], nums[right]);
                operation.sort((a, b) => a - b);

                if (!map.has(`${operation[0]},${operation[1]},${operation[2]},${operation[3]}`)) {
                    result.push([operation[0], operation[1], operation[2], operation[3]]);
                    map.set(`${operation[0]},${operation[1]},${operation[2]},${operation[3]}`, true)
                }

                operation.length = 0;
            }
            l++;
        }
        left++;
        l = 0;
        while (l < r && left < right) {
            if ((r !== left && r !== right && r !== l && l !== right && l !== left)
                && (nums[l] + nums[r] + nums[left] + nums[right] === target)) {
                operation.push(nums[l], nums[r], nums[left], nums[right]);
                operation.sort((a, b) => a - b);

                if (!map.has(`${operation[0]},${operation[1]},${operation[2]},${operation[3]}`)) {
                    result.push([operation[0], operation[1], operation[2], operation[3]]);
                    map.set(`${operation[0]},${operation[1]},${operation[2]},${operation[3]}`, true)
                }
                operation.length = 0;
            }
            r--

        }
        right--

    }
    return result
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([-3, -1, 0, 2, 4, 5], 0))