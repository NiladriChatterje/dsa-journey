/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    if(n===1) return 1
    let factor=0 ;
    let i=1;
    for(;i<=n;i++){
    if(n%i===0)
    factor++;
    
    if(factor === k)
    return i;
    }
    return -1
};