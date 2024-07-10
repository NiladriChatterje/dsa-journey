// function preparingAllPermutations(nums, result = [], arr = [], indexMap = new Map(), map = new Map()) {

//     if (arr.length === nums.length) {
//         if (map.has(`${arr}`))
//             return result;
//         map.set(`${arr}`, 1);
//         result.push([...arr]);
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (indexMap.has(i)) continue;
//         arr.push(nums[i]);
//         indexMap.set(i, true);
//         preparingAllPermutations(nums, result, arr, indexMap, map);
//         indexMap.delete(i);
//         arr.pop();
//     }
//     return result;
// }

// const nextPermutation = (nums) => {
//     const str = `${nums}`;
//     nums.sort((a, b) => a - b);
//     let index = 0;
//     const allPermutations = preparingAllPermutations(nums);
//     for (let i of allPermutations) {
//         if (`${i}` === str)
//             break;
//         index++;
//     }
//     const finalResult = allPermutations[(index + 1) % allPermutations.length]
//     nums.length = 0;
//     nums.push(...finalResult)
//     return finalResult;
// };

//O(n)
function nextPermutation(nums) {
    let ind1 = -1;
    let ind2 = -1;

    for (let i = nums.length - 2; i >= 0; i--)
        if (nums[i] < nums[i + 1]) {
            ind1 = i;
            break;
        }


    if (ind1 == -1)
        nums.reverse();
    else {
        for (let i = nums.length - 1; i >= 0; i--)
            if (nums[i] > nums[ind1]) {
                ind2 = i;
                break;
            }

        nums[ind1] += nums[ind2];
        nums[ind2] = nums[ind1] - nums[ind2];
        nums[ind1] -= nums[ind2];

        for (let i = ind1 + 1, j = nums.length - 1; i < j; i++, j--)
            [nums[i], nums[j]] = [nums[j], nums[i]]


    }
    return nums
}

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1, 5]));
console.log(nextPermutation([1, 3, 2]));