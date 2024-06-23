var findRelativeRanks = function (score) {
    let arr = score.slice(0);
    arr.sort((a, b) => b - a);
    let map = new Map();

    for (let i = 0; i < arr.length; i++)
        if (i == 0) map.set(arr[i], "Gold Medal");
        else if (i == 1) map.set(arr[i], "Silver Medal");
        else if (i == 2) map.set(arr[i], "Bronze Medal");
        else map.set(arr[i], (i + 1).toString());

    for (let i = 0; i < arr.length; i++)
        score[i] = map.get(score[i]);

    return score;
};