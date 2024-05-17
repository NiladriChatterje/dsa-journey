const solveSudoku = function (board) {

    const rowWise = new Map();
    const columnWIse = new Map();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".")
                rowWise.set(`i${i}`, rowWise.get(`i${i}`)?.set(board[i][j], true) || new Map().set(board[i][j], true))
            if (board[j][i] !== '.')
                columnWIse.set(`j${i}`, columnWIse.get(`j${i}`)?.set(board[j][i], true) || new Map().set(board[j][i], true))

        }

    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.')
                for (let k = 1; k < 10; k++)
                    if (!rowWise.get(`i${i}`).has(`${k}`) && !columnWIse.get(`j${i}`).has(`${k}`)) {
                        board[i][j] = `${k}`
                        rowWise.set(`i${i}`, rowWise.get(`i${i}`).set(`${k}`, true))
                        columnWIse.set(`j${i}`, columnWIse.get(`j${i}`).set(`${k}`, true));
                        break;
                    }

        }
    }



    return board;
};

console.log(solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))