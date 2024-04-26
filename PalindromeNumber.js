const isPalindrome = function(x) {
    let sum=0,copy=x;
    while(x>0){
        sum=sum*10 + (x % 10);
        x = Math.trunc(x/10);
    }
    return sum === copy;
};

console.log(isPalindrome(121))
console.log(45>>3);