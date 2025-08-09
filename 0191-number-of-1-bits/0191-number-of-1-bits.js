/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const x = n.toString(2);
    let count = 0;
    for(let i of x)
        if(i=='1')
            count++;

    return count;
};