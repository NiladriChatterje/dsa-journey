/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b)=>a-b);
    let i = cost.length - 1;
    let sum = 0;
    while(i>=0){

        sum +=(i-1>=0)? (cost[i]+cost[i-1]):cost[i];
        i-=3;
    }

    return sum;
};