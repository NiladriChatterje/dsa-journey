/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const res = new Array(2);
    let ind = 0;
    const set = new Set();
    for(let i of nums){
        if(set.has(i))
            res[ind++] = i;
        if(ind == 2)
            break;
        set.add(i);}

    return res;
};