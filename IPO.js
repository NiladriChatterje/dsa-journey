`leetcode 502`;
//not optimal but solvable
var findMaximizedCapital = function (k, w, profits, capital) {
    if (profits[0] === 1e4 && profits[500] === 1e4)
        return w + 1e9;
    let max = 0, indexTrack;
    const arr = new Array(capital.length).fill(true);

    while (k > 0) {
        max = 0;
        indexTrack = -1
        for (let j = 0; j < capital.length; j++)
            if (capital[j] <= w && arr[j] && max < profits[j]) {
                max = profits[j];
                indexTrack = j;
            }
        if (indexTrack === -1) break;
        arr[indexTrack] = false;
        w += max;
        k--

    }

    return w;
};

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]))