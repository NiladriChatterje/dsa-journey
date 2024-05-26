`leetcode 1255`
var maxScoreWords = function (words, letters, score) {
    let sum = 0;
    let max = 0;
    let flag;
    const letterMap = new Map();
    const wordScoreMap = new Map();

    for (let i of letters)
        letterMap.set(i, letterMap.get(i) || 0 + 1);

    //filtering words that has letters not in letters list
    for (let i = 0; i < words.length; i++) {
        flag = false;
        for (let j = 0; j < words[i].length; j++) {
            if (!letterMap.has(words[i][j])) {
                flag = true;
                break;
            }
            sum += score[words[i].charCodeAt(j) - 97];
        }
        if (!flag) wordScoreMap.set(words[i], sum);
        sum = 0;
    }

    for (let i of wordScoreMap.keys())
        console.log(i)

};

console.log(maxScoreWords(["dog", "cat", "dad", "good"],
    ["a", "a", "c", "d", "d", "d", "g", "o", "o"],
    [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))