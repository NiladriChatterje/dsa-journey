var minFlips = function (grid) {
    const transpose = [];
    let rowFlips = 0;
    let columnFlips = 0;
    for (let i of grid) {
        for (let j = 0; j < i.length / 2; j++)
            if (i[j] !== i[i.length - 1 - j]) {
                rowFlips++;
                if (i[j] === 0)
                    i[i.length - 1 - j] = 1;
                else i[j] = 0;
            }

    }

    for (let i = 0; i < grid[0].length; i++) {
        transpose[i] = []
        for (let j = 0; j < grid.length; j++)
            transpose[i].push(grid[j][i])
    }

    for (let i of transpose) {
        for (let j = 0; j < i.length / 2; j++)
            if (i[j] !== i[i.length - 1 - j])
                columnFlips++;
        if (i[j] === 0)
            i[i.length - 1 - j] = 1;
        else i[j] = 0;

    }
    return rowFlips + columnFlips
};

console.log(minFlips([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))
console.log(minFlips([[0, 1], [0, 1], [0, 0]]))
console.log(minFlips([[1], [1]]))