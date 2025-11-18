/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i;
    for(i=0;i<bits.length-1;){
        if(bits[i]==1)
            i += 2;
        else
            i++;
    }
    return (i==bits.length-1)?(bits[i]==0?true:false):false;
};