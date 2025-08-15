/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n==0) return false;
    const log = Math.log(n)/Math.log(4);
    const precision = log.toFixed(9);
    return precision == Math.trunc(precision);
};