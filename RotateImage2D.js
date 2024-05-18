const rotate = function (matrix) {
    let swap;
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        swap = matrix[i];
        matrix[i] = matrix[matrix.length - 1 - i];
        matrix[matrix.length - 1 - i] = swap;
    }

    for (let i = 0; i < matrix.length; i++)
        for (let j = i; j < matrix.length; j++) {
            swap = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = swap
        }


    return matrix;
};

console.log(rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]]))

console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]))