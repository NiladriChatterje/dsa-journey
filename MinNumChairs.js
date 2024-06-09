`leetcode 3168`
var minimumChairs = function (s) {
    let max = 0;
    let minChair = 0;
    for (let i of s) {
        if (i === 'E') minChair++;
        else minChair--;
        max = Math.max(max, minChair)
    }
    return max
};

console.log(minimumChairs("EEEEEEE"))
console.log(minimumChairs("ELELEEL"))