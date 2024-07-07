`1518 leetcode`
var numWaterBottles = function (numBottles, numExchange) {
    let fullBottle = numBottles;
    let remainderEmpty = numBottles % numExchange;
    let eval = 0;
    while (parseInt(fullBottle / numExchange) > 0) {
        eval = parseInt(fullBottle / numExchange)
        numBottles += eval;
        remainderEmpty += eval;

        fullBottle = remainderEmpty - remainderEmpty % numExchange;
        remainderEmpty -= fullBottle;
    }
    return numBottles
};

console.log(numWaterBottles(9, 3))
console.log(numWaterBottles(15, 4))
console.log(numWaterBottles(15, 8))