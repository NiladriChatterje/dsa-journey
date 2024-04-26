/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    console.time();
    let dict={};
    for(let i in nums){
       if((target-nums[i]) in dict)
        return [dict[target-nums[i]],i];
        dict[nums[i]]=i
    }
};

console.log(twoSum([3,2,4],6));console.timeEnd();