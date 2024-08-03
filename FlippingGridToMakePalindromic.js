var minFlips = function (grid) {
    const transpose = [];
    for (let i = 0; i < grid[0].length; i++) {
        transpose[i] = []
        for (let j = 0; j < grid.length; j++)
            transpose[i].push(grid[j][i])
    }
    let rowFlips = 0;
    let columnFlips = 0;
    for (let i of grid) {
        for (let j = 0; j < i.length / 2; j++)
            if (i[j] !== i[i.length - 1 - j])
                rowFlips++;

    }

    for (let i of transpose) {
        for (let j = 0; j < i.length / 2; j++)
            if (i[j] !== i[i.length - 1 - j])
                columnFlips++;

    }
    return Math.min(rowFlips, columnFlips)
};

console.log(minFlips([[1, 0, 0], [0, 0, 0], [0, 0, 1]]))
console.log(minFlips([[0, 1], [0, 1], [0, 0]]))
console.log(minFlips([[1], [0]]))