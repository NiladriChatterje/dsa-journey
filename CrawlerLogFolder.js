`1598 leetcode`
var minOperations = function (logs) {
    let distFromMain = 0;
    for (let i of logs) {
        switch (i) {
            case '../': distFromMain--;
                break;
            case './': break;
            default: distFromMain++
        }
        distFromMain = distFromMain < 0 ? 0 : distFromMain
    }
    return distFromMain;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]))
console.log(minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]))