const jump = nums => {
    let jumps = 0, curEnd = 0, curFarthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        curFarthest = Math.max(curFarthest, i + nums[i]);
        if (i == curEnd) {
            jumps++;
            curEnd = curFarthest;
        }
    }
    return jumps;
}

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([1, 2, 3]))
console.log(jump([1, 3, 2]))
console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([1]))
