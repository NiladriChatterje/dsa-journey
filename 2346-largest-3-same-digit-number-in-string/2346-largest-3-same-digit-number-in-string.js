/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = -1;
    let numb = 0;
    for(let i = 0; i<num.length-2;){
        if(num.charAt(i)==num.charAt(i+1) && num.charAt(i+1)==num.charAt(i+2)){
            numb = parseInt(num.charAt(i))
            max = Math.max(numb,max);
            i += 2;
        }
        else i++;
    }
    return max==-1?"":`${max}${max}${max}`;
};