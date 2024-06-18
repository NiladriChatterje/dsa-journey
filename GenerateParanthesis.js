const generateParenthesis = function (n, res = '', left = 0, right = 0, arr = []) {
    if (n === 1) return ['()'];
    if (res.length === n * 2)
        return arr.push(res);

    if (left < n) generateParenthesis(n, res + '(', left + 1, right, arr);
    if (right < left) generateParenthesis(n, res + ')', left, right + 1, arr);

    return arr;
};


console.log(generateParenthesis(3))