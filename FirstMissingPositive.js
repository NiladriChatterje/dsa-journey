const firstMissingPositive = (nums) => {
    const map = new Map();
    let num = 1;
    for (let i of nums)
        map.set(i, true);

    let i = 0
    while (i++ < nums.length) {
        if (!map.has(num)) return num;
        num++
    }
    return num
};

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))