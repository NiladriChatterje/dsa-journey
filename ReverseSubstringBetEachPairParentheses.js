var reverseParentheses = function (s) {
    const charArray = s.split('');
    let len = charArray.length;
    let temp;
    let newwestParen;
    const result = [];
    const stack = [];
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (charArray[i] === '(')
            stack.push(i);

        if (charArray[i] === ')') {
            j = i - 1;
            charArray[i] = '\0';
            newwestParen = stack.pop();
            charArray[newwestParen] = '\0';
            let k = 1;
            while (j > newwestParen + parseInt((i - newwestParen) / 2)) {

                temp = charArray[newwestParen + k];
                charArray[newwestParen + k] = charArray[j];
                charArray[j] = temp;
                j--;
                k++;
            }
        }
    }
    for (let i of charArray)
        if (i !== '\0')
            result.push(i)

    return result.join('')
};
console.log(reverseParentheses("(abcd)"))
console.log(reverseParentheses("(u(love)i)"))
console.log(reverseParentheses("(ed(et(oc))el)"))