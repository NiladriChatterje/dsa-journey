/*Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range
[-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers 
(signed or unsigned).
*/

const reverse = function(x) {
    const rev=Number(Math.abs(x).toString().split('').reverse().join(''))*Math.sign(x);
    return Math.pow(2,31)-1>rev&&-Math.pow(2,31)<rev?rev:0;
};

console.log(reverse(-15342364)); 