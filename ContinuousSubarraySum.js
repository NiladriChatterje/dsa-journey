

const checkSubarraySum = function(nums, k) {
    if(nums.length == 2)
        return nums.reduce((prev,cur)=>prev+cur)%k===0?true:false;

    if(nums.length <2) return false;

    for (let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(!(nums.slice(j,j+i+2).reduce((prev,cur)=>prev+cur)%k) && nums[i+j+1]!==undefined)
            return true; 

        }
    }

    return false;
};

console.log(checkSubarraySum([23,2,6,4,7],6))//true
console.log(checkSubarraySum([23,2,4,6,7],6))//true
console.log(checkSubarraySum([23,2,6,4,7],13))//false
console.log(checkSubarraySum([0,0],1))//true
console.log(checkSubarraySum([1,2,3],6))//true
console.log(checkSubarraySum([1,3,0,6],6))//true
console.log(checkSubarraySum([1,2,12],6))//false
