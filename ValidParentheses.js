var isValid = function (s) {
    const stack = [];
    let temp
    for (let i of s) {
        if (i === '(' || i === '[' || i === '{') {
            stack.push(i);
            continue;
        }
        switch (i) {
            case ')': temp = stack.pop();
                if (temp !== '(')
                    return false;
                break;
            case ']': temp = stack.pop();
                if (temp !== '[')
                    return false;
                break;
            case '}': temp = stack.pop();
                if (temp !== '{')
                    return false;
        }
    }
    return stack.length !== 0 ? false : true;
};