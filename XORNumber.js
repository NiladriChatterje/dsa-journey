var duplicateNumbersXOR = function(nums) {
    const map = new Map();
    for(let i of nums)
        map.set(i,parseInt(map.get(i)||0)+1);

    let result = 0;
    for(let i of map.keys())
        if(map.get(i)===2)
            result ^= i;
        
    return result;
};

console.log(duplicateNumbersXOR([1,2,1,3]))
console.log(duplicateNumbersXOR([1,2,3]))
console.log(duplicateNumbersXOR([1,2,2,1]))