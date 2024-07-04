var threeConsecutiveOdds = function (arr) {

    for (let i = 0; i <= arr.length - 3; i++)
        if ((arr[i] & arr[i + 1] & arr[i + 2]) % 2 === 1) return true;
    return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1]))
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]))
console.log(threeConsecutiveOdds([1, 1, 1]))