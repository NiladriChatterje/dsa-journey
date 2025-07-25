/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    const set = new Set();
    let prev_negativeNum = 0;
    let max = Math.max(...nums);
    let sum = 0;

    if(max<0)
        return max;

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
        }
        else
         sum += i;
    }

    return sum;
};