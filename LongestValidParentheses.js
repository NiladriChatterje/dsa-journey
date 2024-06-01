`32 Leetcode`
// function longestValidParentheses(s) {
//     let startBrack = 0;
//     let endBtack = 0;
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s.charAt(i) === '(') {
//             startBrack++;

//         } else { endBtack++ }

//         if (startBrack === endBtack) {
//             count += startBrack + endBtack
//             startBrack = endBtack = 0;
//             continue;
//         }

//     }
//     return count
// };
var longestValidParentheses = function (S) {
    let stack = [-1], ans = 0
    for (let i = 0; i < S.length; i++)
        if (S[i] === '(') stack.push(i)
        else if (stack.length === 1) stack[0] = i
        else stack.pop(), ans = Math.max(ans, i - stack[stack.length - 1])
    return ans
};

console.log(longestValidParentheses("()(())"))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(()"))