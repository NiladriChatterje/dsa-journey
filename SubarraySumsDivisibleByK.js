`leetcode 974`
const subarraysDivByK = function (nums, k) {

    const map = new Map();
    let sum = 0;
    let count = 0;
    let mod = 0;
    map.set(sum, 1);
    for (let i of nums) {
        sum += i;
        mod = sum % k;
        mod = mod < 0 ? mod + k : mod;
        if (map.has(mod))
            count += map.get(mod) ?? 1;

        map.set(mod, (map.get(mod) ?? 0) + 1)
    }
    return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
console.log(subarraysDivByK([-1, 2, 9], 2))
console.log(subarraysDivByK([2, -2, 2, -4], 6))
// console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))