var canAliceWin = function (nums) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i of nums) {
        if (Math.floor(Math.log10(i)) + 1 === 1)
            sum1 += i;
        else sum2 += i;
    }
    if (sum1 > sum2 || sum2 > sum1)
        return true;
    return false;
};

console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
