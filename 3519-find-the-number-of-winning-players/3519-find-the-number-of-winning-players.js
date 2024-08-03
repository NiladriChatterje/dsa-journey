var winningPlayerCount = function (n, pick) {
    const map = new Map();
    pick.sort((a, b) => a[0] - b[0])
    let count = 0;
    for (let i = 0; i < pick.length;) {
        if (map.has(pick[i][0])) {
            map.get(pick[i][0])[pick[i][1]] = (map.get(pick[i][0])[pick[i][1]] ?? 0) + 1;
        } else {
            map.set(pick[i][0], { [pick[i][1]]: 1 });
        }
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
