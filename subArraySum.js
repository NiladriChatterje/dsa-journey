`leetcode 560`
const subarraySum = function (nums, k) {
    let sum = 0;
    let count = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let residual = sum - k;

        if (map.has(residual))
            count += map.get(residual);

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, -1, 0], 0))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([-1, -1, 1], 0))
console.log(subarraySum([1, 2, 1, 2, 1], 3))
console.log(subarraySum([1], 0))