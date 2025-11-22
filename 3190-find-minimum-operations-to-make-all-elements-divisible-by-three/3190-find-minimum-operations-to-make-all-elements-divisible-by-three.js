/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;
    for(let i of nums)
        if(i%3 != 0)
            operations++;

    return operations;
};