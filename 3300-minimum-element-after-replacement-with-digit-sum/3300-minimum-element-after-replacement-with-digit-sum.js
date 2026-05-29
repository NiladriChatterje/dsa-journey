/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = 10**4 + 1;
    let sum;
    for(let ele of nums){
        sum = 0
        while(ele>0){
            sum += ele%10;
            ele = Math.trunc(ele/10)
        }

        min = Math.min(sum,min)
    }

    return min;
};