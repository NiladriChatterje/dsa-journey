const longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const map = new Map();

    for (let i of nums)
        map.set(i, true);

    let max = 1;
    let count = 1;
    let elementNextPrev;

    for (let i of nums) {
        if (map.has(i - 1))
            continue;
        count = 1
        elementNextPrev = i + 1;
        while (map.has(elementNextPrev)) {
            count++;
            elementNextPrev++;
        }

        map.set(i, true);
        max = Math.max(max, count)

    }

    return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))