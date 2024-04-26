/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.*/

const NumberLetterMap = new Map();
NumberLetterMap.set(2, ['a', 'b', 'c']);
NumberLetterMap.set(3, ['d', 'e', 'f']);
NumberLetterMap.set(4, ['g', 'h', 'i']);
NumberLetterMap.set(5, ['j', 'k', 'l']);
NumberLetterMap.set(6, ['m', 'n', 'o']);
NumberLetterMap.set(7, ['p', 'q', 'r', 's']);
NumberLetterMap.set(8, ['t', 'u', 'v']);
NumberLetterMap.set(9, ['w', 'x', 'y', 'z']);

const letterCombinations = function (digits, rarr = []) {
    if (digits.length === 1) return NumberLetterMap.get(parseInt(digits));
    let arr = NumberLetterMap.get(parseInt(digits[0]));
    for (let j of letterCombinations(digits.slice(1, digits.length, rarr))) {
        for (let i of arr)
            rarr.push(i + j);
    }
    return rarr;
};

console.log(letterCombinations("2346"));
console.log(letterCombinations("23"));