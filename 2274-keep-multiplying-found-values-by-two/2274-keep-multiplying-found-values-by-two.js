/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    for(let i of nums){
        if(original == i || set.has(original))
            original *= 2;
    }
    return original;
};