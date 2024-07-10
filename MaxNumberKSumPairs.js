var maxOperations = function (nums, k) {
    const elementMap = new Map();
    let operation = 0;
    for (let i of nums) {
        if (elementMap.has(k - i)) {
            if (elementMap.get(k - i) > 0) {
                operation++;
                elementMap.set(k - i, elementMap.get(k - i) - 1);
            }
            if (elementMap.get(k - i) === 0)
                elementMap.delete(k - i)
        } else
            elementMap.set(i, (elementMap.get(i) ?? 0) + 1)
    }

    return operation;
};

console.log(maxOperations([1, 2, 3, 4], 5))
console.log(maxOperations([3, 1, 3, 4, 3], 6))