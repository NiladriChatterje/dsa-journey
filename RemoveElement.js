const removeElement = function (nums, val) {
    const result = []
    for (let i of nums)
        if (i !== val) result.push(i);

    nums.length = 0;
    nums.push(...result)


    return nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))