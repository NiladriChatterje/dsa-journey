/*Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.*/

var threeSum = function(nums) {
    let res=[],dict={};
    for(let i in nums){
        for(let j in nums){
        if(0-nums[i]-nums[j] in dict && i!=j&&i!=dict[nums[j]]) res.push([0-nums[i]-nums[j],nums[i],nums[j]])
        else dict[nums[j]]=j
        }
        }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));