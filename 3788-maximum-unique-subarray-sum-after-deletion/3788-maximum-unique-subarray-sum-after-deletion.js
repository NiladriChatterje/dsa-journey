/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    const set = new Set();
    let prev_negativeNum = 0;
    let flag = false;
    let maxNeg = -101;
    let sum = 0;

    for (let i of nums) {
        if (set.has(i))
            continue;

        set.add(i);
        if (i < 0) {
            if (prev_negativeNum < i) {
                sum -= prev_negativeNum;
                sum += i;
                prev_negativeNum = i;
            }
            maxNeg = Math.max(maxNeg,i);
        }
        else{
            flag = true;
            sum += i;
         }
    }

    if(!flag)
        return maxNeg
    return sum;
};