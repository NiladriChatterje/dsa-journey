/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    // didn't understand the question and has no sense but solved it
    // I am sure i will again fail to understand the question
    // if I encounter it in future
    
    let i;
    for(i=0;i<bits.length-1;){
        if(bits[i]==1)
            i += 2;
        else
            i++;
    }
    return (i==bits.length-1)?(bits[i]==0?true:false):false;
};