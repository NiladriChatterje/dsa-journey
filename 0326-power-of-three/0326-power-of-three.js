/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==0) return false;
    const x = Math.log(n)/Math.log(3)
    const precision = x.toFixed(9);
    return precision == Math.trunc(precision);
};

