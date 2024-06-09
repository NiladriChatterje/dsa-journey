var myAtoi = function (s) {
    let trimmed_s = s.trimStart();
    let num = 0;
    let firstAssignment = false;
    let sign = 1;
    for (let i of trimmed_s) {
        if (i === '-' && !firstAssignment) { sign = -1; firstAssignment = true }
        else if (i === '+' && !firstAssignment) { firstAssignment = true; continue; }
        else if (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) {
            num = num * 10 + i.charCodeAt(0) - 48;
            firstAssignment = true
        }
        else break;
    }
    if (num * sign < -Math.pow(2, 31)) return -Math.pow(2, 31);
    else if (num * sign > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    return num * sign;
};

console.log(myAtoi("42"))
console.log(myAtoi(" -042"))
console.log(myAtoi("1337c0d3"))
console.log(myAtoi("0-1"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("  +0 123"))