/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const basketSet = new Set();

    for(let i of fruits){
        for(let j=0;j<baskets.length;j++){
            if(basketSet.has(j))
                continue;
            
            if(baskets[j]>=i){
                basketSet.add(j);
                break;
            }

        }
    }

    return baskets.length - basketSet.size;
};