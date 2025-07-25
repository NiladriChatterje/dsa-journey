/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let minPrice = prices[0];
    let j=1;

   while( j<prices.length){
    if(prices[j]<minPrice)
        minPrice = prices[j];
    else
        max = Math.max(max,prices[j]-minPrice)
    j++
   }

   
    return max;
};