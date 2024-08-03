var winningPlayerCount = function (n, pick) {
    const map = new Map();
    pick.sort((a, b) => a[0] - b[0])
    let count = 0;
    for (let i = 0; i < pick.length;) {
        if (map.has(pick[i][0]))
            map.get(pick[i][0])[pick[i][1]] = (map.get(pick[i][0])[pick[i][1]] ?? 0) + 1;
        else
            map.set(pick[i][0], { [pick[i][1]]: 1 });

        // console.log(map.get(pick[i][0])[pick[i][1]], pick[i][0])
        if (map.has(pick[i][0]) && map.get(pick[i][0])[pick[i][1]] > pick[i][0]) {
            count++;
            let x = pick[i][0]
            while (i < pick.length && pick[i][0] === x)
                i++;
        } else i++
    }
    return count
};


console.log(winningPlayerCount(4, [[0, 0], [1, 0], [1, 0], [2, 1], [2, 1], [2, 0]]))
console.log(winningPlayerCount(5, [[1, 1], [1, 2], [1, 3], [1, 4]]))
console.log(winningPlayerCount(5, [[1, 1], [2, 4], [2, 4], [2, 4]]))
console.log(winningPlayerCount(2, [[0, 1], [0, 8], [1, 5], [0, 1]]))