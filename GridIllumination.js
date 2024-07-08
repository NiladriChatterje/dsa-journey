//1001 Grid Illumination

function operation(grid, ro, col, n) {
    let x, y, w, z, a, b, c, d;
    x = w = a = c = ro;
    y = z = b = d = col;
    while (x + 1 < n || y + 1 < n || w - 1 >= 0 || z - 1 >= 0
        || a + 1 < n || b - 1 >= 0 || c - 1 >= 0 || d + 1 < 0
    ) {
        if (x + 1 < n)
            grid[x + 1][col]++;

        if (w - 1 >= 0)
            grid[w - 1][col]++;

        if (y + 1 < n)
            grid[ro][y + 1]++;

        if (z - 1 >= 0)
            grid[ro][z - 1]++;


        if (x + 1 < n && y + 1 < n)
            grid[x + 1][y + 1]++;

        if (w - 1 >= 0 && z - 1 >= 0)
            grid[w - 1][z - 1]++;

        if (a + 1 < n && b - 1 >= 0)
            grid[a + 1][b - 1]++;

        if (c - 1 >= 0 && d + 1 < 0)
            grid[c - 1][d + 1]++;

        a++;
        b--;
        c--;
        d++;
        w--;
        z--;
        x++;
        y++;

    }
    grid[ro][col]++;
}

function turnOffLightLoop(grid, ro, col, n) {
    let x, y, w, z, a, b, c, d;
    x = w = a = c = ro;
    y = z = b = d = col;
    while (x + 1 < n || y + 1 < n || w - 1 >= 0 || z - 1 >= 0
        || a + 1 < n || b - 1 >= 0 || c - 1 >= 0 || d + 1 < 0
    ) {
        if (x + 1 < n)
            grid[x + 1][col] = grid[x + 1][col] > 0 ? grid[x + 1][col] - 1 : 0;;

        if (w - 1 >= 0)
            grid[w - 1][col] = grid[w - 1][col] > 0 ? grid[w - 1][col] - 1 : 0;

        if (y + 1 < n)
            grid[ro][y + 1] = grid[ro][y + 1] > 0 ? grid[ro][y + 1] - 1 : 0;

        if (z - 1 >= 0)
            grid[ro][z - 1] = grid[ro][z - 1] > 0 ? grid[ro][z - 1] - 1 : 0;

        if (x + 1 < n && y + 1 < n)
            grid[x + 1][y + 1] = grid[x + 1][y + 1] > 0 ? grid[x + 1][y + 1] - 1 : 0;

        if (w - 1 >= 0 && z - 1 >= 0)
            grid[w - 1][z - 1] = grid[w - 1][z - 1] > 0 ? grid[w - 1][z - 1] - 1 : 0;

        if (a + 1 < n && b - 1 >= 0)
            grid[a + 1][b - 1] = grid[a + 1][b - 1] > 0 ? grid[a + 1][b - 1] - 1 : 0;

        if (c - 1 >= 0 && d + 1 < 0)
            grid[c - 1][d + 1] = grid[c - 1][d + 1] > 0 ? grid[c - 1][d + 1] - 1 : 0;

        a++;
        b--;
        c--;
        d++;
        w--;
        z--;
        x++;
        y++;
    }
    grid[ro][col] = grid[ro][col] > 0 ? grid[ro][col] - 1 : 0;
}

function turnOffLight(grid, source, ro, col, n) {
    if (ro - 1 >= 0 && col - 1 >= 0 && source.has(`${ro - 1},${col - 1}`)) {
        turnOffLightLoop(grid, ro - 1, col - 1, n)
        source.delete(`${ro - 1},${col - 1}`);
    }

    if (ro - 1 >= 0 && source.has(`${ro - 1},${col}`)) {
        turnOffLightLoop(grid, ro - 1, col, n)
        source.delete(`${ro - 1},${col}`)
    }

    if (ro - 1 >= 0 && col + 1 < n && source.has(`${ro - 1},${col + 1}`)) {
        turnOffLightLoop(grid, ro - 1, col + 1, n);
        source.delete(`${ro - 1},${col + 1}`)
    }
    if (col + 1 < n && source.has(`${ro},${col + 1}`)) {
        turnOffLightLoop(grid, ro, col + 1, n)
        source.delete(`${ro},${col + 1}`)
    }
    if (ro + 1 < n && col + 1 < n && source.has(`${ro + 1},${col + 1}`)) {
        turnOffLightLoop(grid, ro + 1, col + 1, n)
        source.delete(`${ro + 1},${col + 1}`)
    }
    if (ro + 1 < n && source.has(`${ro + 1},${col}`)) {
        turnOffLightLoop(grid, ro + 1, col, n)
        source.delete(`${ro + 1},${col}`)
    }
    if (ro + 1 < n && col - 1 >= 0 && source.has(`${ro + 1},${col - 1}`)) {
        turnOffLightLoop(grid, ro + 1, col - 1, n)
        source.delete(`${ro + 1},${col - 1}`)
    }
    if (col - 1 >= 0 && source.has(`${ro},${col - 1}`)) {
        turnOffLightLoop(grid, ro, col - 1, n)
        source.delete(`${ro},${col - 1}`)
    }
    if (source.has(`${ro},${col}`)) {
        turnOffLightLoop(grid, ro, col, n)
        source.delete(`${ro},${col}`)
    }
}

var gridIllumination = function (n, lamps, queries) {
    const grid = new Array(n);
    for (let i = 0; i < n; i++)
        grid[i] = new Array(n).fill(0);
    const source = new Map();
    const alreadyIlluminated = new Map();

    for (const [ro, col] of lamps) {
        source.set(`${ro},${col}`, 1);
        if (!alreadyIlluminated.has(`${ro},${col}`))
            operation(grid, ro, col, n);
        alreadyIlluminated.set(`${ro},${col}`, 1);
    }
    // console.log(grid)
    const result = [];
    for (const [ro, col] of queries) {
        if (grid[ro][col] >= 1)
            result.push(1);
        else
            result.push(0);

        turnOffLight(grid, source, ro, col, n)

    }
    // console.log(grid)
    return result;
};

console.log(gridIllumination(5, [[0, 0], [4, 4]], [[1, 1], [1, 0]]))
console.log(gridIllumination(5, [[0, 0], [4, 4]], [[1, 1], [1, 1]]))
console.log(gridIllumination(5, [[0, 0], [1, 0]], [[1, 1], [1, 1]]))
console.log(gridIllumination(6, [[2, 5], [4, 2], [0, 3], [0, 5], [1, 4], [4, 2], [3, 3], [1, 0]],
    [[4, 3], [3, 1], [5, 3], [0, 5], [4, 4], [3, 3]]))
