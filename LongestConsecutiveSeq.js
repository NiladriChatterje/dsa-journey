const longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    const set = Array.from(new Set(nums));

    let longestConsecutiveCount = 0, prev = 1;
    for (let i of set) {
        let integer = parseInt(i)
        if (set.includes(integer - 1) || set.includes(integer + 1)) prev++;
        else {
            longestConsecutiveCount = (prev > longestConsecutiveCount) ? prev : longestConsecutiveCount;
            prev = 1;
        }
    }
    longestConsecutiveCount = (prev > longestConsecutiveCount) ? prev : longestConsecutiveCount;
    return longestConsecutiveCount;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))