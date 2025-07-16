/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let oddNum = 0;
    let evenNum = 0;
    let even_odd = 0;
    let odd_even = 0;

    for(let ele of nums){
        if(ele%2==1){
            oddNum += 1;
            odd_even = even_odd + 1;
        }
        else {
            evenNum += 1;
            even_odd = odd_even + 1;
        }
    }

    return Math.max(oddNum,evenNum,even_odd,odd_even);
};
