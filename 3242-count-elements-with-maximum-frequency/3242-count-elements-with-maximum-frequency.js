/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = new Map();
    let max = 0;
    let count = 0;

    for(let i of nums){
        map.set(i,(map.get(i)??0)+1);
        max = Math.max(max,map.get(i));
    } 

    for(const [key,value] of map)
        count = value == max ? count + 1 : count;

    return count * max;
};