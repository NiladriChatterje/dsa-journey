/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==0) return false;
    let x = (Math.log(n)/Math.log(2)).toFixed(9)
    // console.log(x)
    return x == Math.trunc(x);
};