`leetcode 974`
var subarraysDivByK = function (nums, k) {
    if (nums.length === 1) return nums[0] % k === 0 ? 1 : 0
    const map = new Map();
    let sum = 0;
    let count = 0;
    map.set(sum, 1);
    for (let i of nums) {
        sum += i;

        if (sum % k === 0 || map.has(sum % k))
            count += map.get(sum % k) ?? 1;

        map.set(sum % k, (map.get(sum % k) ?? 0) + 1)
    }
    return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
console.log(subarraysDivByK([-1, 2, 9], 2))
// console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))