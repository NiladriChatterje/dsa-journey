const exist = function (board, word) {

    const recurse = (row, column, length) => {
        if (length === word.length)
            return true;

        if (row < 0 || row >= board.length || column < 0 || column >= board[0].length || board[row][column] !== word.charAt(length))
            return false;


        const temp = board[row][column];
        board[row][column] = '\0';

        const result = recurse(row + 1, column, length + 1) ||
            recurse(row - 1, column, length + 1) ||
            recurse(row, column + 1, length + 1) ||
            recurse(row, column - 1, length + 1);

        board[row][column] = temp;
        return result;
    };

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j)
            if (recurse(i, j, 0))
                return true;


    }
    return false;
};