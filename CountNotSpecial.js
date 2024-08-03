
var nonSpecialCount = function (l, r) {
    let countFactors;
    let numbers = 0;
    let sqrt

    while (l <= r) {
        countFactors = 0;
        sqrt = Math.ceil(Math.sqrt(l));
        for (let i = 1; i <= sqrt; i++) {
            if (l % i === 0)
                countFactors += (i === l / i) ? 1 : 2;

            if (countFactors > 2)
                break;
        }

        if (countFactors - 1 !== 2)
            numbers++;
        l++
    }
    return numbers
};

console.log(nonSpecialCount(5, 7))
console.log(nonSpecialCount(4, 16))
console.log(nonSpecialCount(10086764, 96508040))