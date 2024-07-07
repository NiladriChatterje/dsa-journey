var maximumPoints = function (enemyEnergies, currentEnergy) {
    enemyEnergies.sort((a, b) => a - b);
    let maxPointer = 0;
    let points = 0;
    let i = maxPointer
    let x = 0;
    while (i <= enemyEnergies.length) {
        if (currentEnergy >= enemyEnergies[i]) {
            x = parseInt(currentEnergy / enemyEnergies[i])
            points += x;
            currentEnergy -= x * enemyEnergies[i];

        }
        else if (points > 0) {
            currentEnergy += enemyEnergies[maxPointer];
            maxPointer++;
            i = maxPointer
        }
        else if (currentEnergy < enemyEnergies[i]
            && points === 0
        ) i++;
    }
    return points
};

console.log(maximumPoints([3, 2, 2], 2))
console.log(maximumPoints([2], 10))
console.log(maximumPoints([2, 3, 4], 4))//5