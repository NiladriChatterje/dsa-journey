/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const result = [];
    let max = 0;
    const maxFromColumns = [];

    for (let i = 0; i < matrix[0].length; i++) {
        max = 0;
        for (let j = 0; j < matrix.length; j++)
            if (max < matrix[j][i])
                max = matrix[j][i];
        maxFromColumns.push(max);

    }
    const minFromRows = matrix.map(item => Math.min(...item));

    for (let i of maxFromColumns)
        for (let j of minFromRows)
            if (i === j)
                result.push(i);

    return result;
};
