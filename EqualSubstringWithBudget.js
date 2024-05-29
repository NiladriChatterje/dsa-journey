`leetcode 1208`
var equalSubstring = function (s, t, maxCost) {

    let maxLength = 0;
    let firstPointer = 0;
    for (let i = 0; i < t.length; i++) {
        if (Math.abs(s.charCodeAt(i) - t.charCodeAt(i)) <= maxCost) {
            maxCost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
            maxLength++;
        } else {
            maxCost += Math.abs(s.charCodeAt(firstPointer) - t.charCodeAt(firstPointer));
            maxCost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
            firstPointer++;
        }
    }
    return maxLength
};

console.log(equalSubstring("abcd", "bcdf", 3))
console.log(equalSubstring("fkfnkrfunni", "jyufzxzfbsa", 18))