var convert = function (s, numRows) {
    if (numRows === 1) return s;
    const result = [];
    let flag = true;
    let j = 0;
    for (let i of s) {
        result[j] = result[j] !== undefined ? result[j] + i : i
        j = flag ? j + 1 : j - 1;
        if (j === numRows - 1) flag = false;
        else if (j === 0) flag = true;
    }

    return result.join('')
};

console.log(convert("PAYPALISHIRING", 3))