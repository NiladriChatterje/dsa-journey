/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal 
and all the elements on the secondary diagonal that are not part 
of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Constarint:
mat.length == mat[0].length
*/
const diagonalSum = function (mat) {
    if (mat[0].length <= 1 && mat.length <= 1) return mat[0][0];
    let sum = 0;
    for (let i in mat) {
        if (mat.length % 2 != 0)
            if (i != parseInt(mat.length / 2))
                sum += mat[i][i] + mat[i][mat.length - i - 1]
            else
                sum += mat[i][i]
        else
            sum += mat[i][i] + mat[i][mat.length - i - 1]


    }
    return sum;
};

console.log(diagonalSum([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]));

console.log(diagonalSum([[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]));

console.log(diagonalSum([[5]]));