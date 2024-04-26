/*
Given an integer array nums, find the subarray which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/


function maxSub(arr){
   let maxArr=[];
  
   for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length&&j+i+1!=undefined;j++){
      maxArr.push(arr.slice(j,j+i+1).reduce((pr,cur)=>pr+cur));
     }
      
   }
return Math.max(...maxArr);
}

//console.log(maxSub([-2,1,-3,4,-1,2,1,-5,4]));
//console.log(maxSub([1]));
console.log(maxSub([]));