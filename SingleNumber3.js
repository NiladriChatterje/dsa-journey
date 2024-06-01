`leetcode 260`
function singleNumber(nums) {
    const map = new Map();
    for (let i of nums)
        map.set(i, (map.get(i) ?? 0) + 1);


    const result = [];
    for (let i of nums)
        if (map.get(i) === 1) result.push(i);

    console.log(map)

    return result
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]))