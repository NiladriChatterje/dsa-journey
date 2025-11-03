/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let count = 0;

    for(let i=1; i<colors.length;i++){
        while(i<colors.length && colors.charAt(i)==colors.charAt(i-1)){
            count += Math.min(neededTime[i],neededTime[i-1]);
            if(neededTime[i]<neededTime[i-1])
                neededTime[i] = neededTime[i-1];
         
            i++;
        }
    }

    return count;
};