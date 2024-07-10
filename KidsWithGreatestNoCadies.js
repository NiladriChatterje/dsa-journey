var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies);
    const result = new Array(candies.length);
    for (let i = 0; i < candies.length; i++)
        if (candies[i] + extraCandies >= max)
            result[i] = true;
        else result[i] = false

    return result
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));