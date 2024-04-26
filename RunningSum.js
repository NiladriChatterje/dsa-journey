/*
Given an array nums. We define a running sum 
of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/
const runningSum = function(nums) {
    for(let i in nums)
     {  if(i==0) continue;
        nums[i] += nums[i-1];

     }  return nums;
};