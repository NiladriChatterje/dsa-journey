/*
You are given a large integer represented 
as an integer array digits, where each digits[i]is the ith digit of the integer. 
The digits are ordered from most significant to least significant in 
left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/
const plusOne=(digits)=>{
    let c=1;
    for (i in digits){
        let x=digits[digits.length-i-1]+c
        digits[digits.length-i-1] =x%10;
        c=Math.trunc(Math.log10(x)+1)==2?1:0;//also parseInt() exists
        if(!c) return digits;
    }
    digits.unshift(c);
    return digits
}

console.log(plusOne([1,2,3]));
console.log(plusOne([9,9,9]));
console.log(plusOne([9]));