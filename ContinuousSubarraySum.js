

// const checkSubarraySum = function (nums, k) {
//     if (nums.length === 2)
//         return (nums[0] + nums[1]) % k === 0 ? true : false;

//     if (nums.length < 2) return false;
//     let sum;
//     let l;
//     for (let i = 0; i < nums.length; i++) {
//         sum = 0;
//         l = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             l++;
//             if (sum % k === 0 && l >= 2)
//                 return true;
//         }
//     }

//     return false;
// };

//Finding O(n) solution

const checkSubarraySum = function (nums, k) {
    if (nums.length < 2) return false;
    let sum = 0;
    const map = new Map();
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (!map.has(sum % k))
            map.set(sum % k, i);

        if (map.has(sum % k) && i - map.get(sum % k) > 1)
            return true;

    }

    return false;
};
// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))//true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6))//true
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 13))//false
// console.log(checkSubarraySum([0, 0], 1))//true
// console.log(checkSubarraySum([1, 2, 3], 6))//true
// console.log(checkSubarraySum([1, 3, 0, 6], 6))//true
// console.log(checkSubarraySum([1, 2, 12], 6))//false
