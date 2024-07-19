`1380`
var luckyNumbers = function (matrix) {
    const result = [];
    let max, min;
    const maxFromColumns = [];
    const minFromRows = [];
    let j, k;
    let i = 0, l = 0;
    while (i < matrix[0].length || l < matrix.length) {
        max = 0;
        min = Infinity
        j = 0;
        k = 0;
        while (j < matrix.length || k < matrix[0].length) {
            if (j < matrix.length && i < matrix[0].length && max < matrix[j][i])
                max = matrix[j][i];

            if (k < matrix[0].length && l < matrix.length && min > matrix[l][k])
                min = matrix[l][k];

            j++;
            k++
        }
        maxFromColumns.push(max);
        minFromRows.push(min)
        i++;
        l++
    }


    for (let i of maxFromColumns)
        for (let j of minFromRows)
            if (i === j)
                result.push(i);



    return result;
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]))