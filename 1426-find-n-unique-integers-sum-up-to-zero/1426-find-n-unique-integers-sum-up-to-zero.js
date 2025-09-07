/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const result = new Array(n);
    const barrier = Math.trunc(n/2);
    let i = barrier;
    let size = n;

    while(i>=-barrier){
        if(n%2==0 && i==0)
            {
                i--;
                continue;
            }
            result[size-1]=i;
            size--;
            i--;
    }
   
    return result
};