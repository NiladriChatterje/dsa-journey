/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let x = n.toString(2).length;
    let sum = 0;
    while(x-1>=0){
        sum += Math.pow(2,x-1);
        x--;
    }
    return sum
};