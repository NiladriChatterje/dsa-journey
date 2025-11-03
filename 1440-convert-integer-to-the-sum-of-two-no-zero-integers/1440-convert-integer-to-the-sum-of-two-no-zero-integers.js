/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let a = Math.ceil(n/2);
    let b = Math.floor(n/2);

    let copy_a = a;
    let copy_b = b;

    let zeroPos=0;
    let d;
    let pow10
    while(copy_a>0){
        d = copy_a % 10;
        if(d==0){
            pow10 = Math.pow(10,zeroPos)
            a += pow10;
            b -= pow10;    
        }
        zeroPos++;
        copy_a = Math.trunc(a/Math.pow(10,zeroPos));
    }

    copy_a = a;
    copy_b = b;
    zeroPos = 0;
    
     while(copy_b>0){
        d = copy_b % 10;
        if(d==0){
            pow10 = Math.pow(10,zeroPos)
            a += pow10;
            b -= pow10;    
        }
        zeroPos++;
        copy_b = Math.trunc(b/Math.pow(10,zeroPos));
    }

    return [a,b]
};