`leetcode 2582`
// var passThePillow = function (n, time) {
//     if (time < n) return time + 1;
//     let i = 0, flag = false;
//     while (time >= 0) {
//         if (i === n) flag = true;
//         else if (i === 1) flag = false;

//         i = flag ? i - 1 : i + 1;
//         time--;
//         console.log(i)

//     }
//     return i;
// };

//Lets try to optimize it
var passThePillow = function (n, time) {
    if (time < n) return time + 1;
    let cycle = parseInt(time / (n - 1));
    if (cycle % 2 === 0)
        return time % (n - 1) + 1;
    return n - time % (n - 1)
};

console.log(passThePillow(4, 5))
console.log(passThePillow(8, 9))
console.log(passThePillow(18, 38));
console.log(passThePillow(2, 341));