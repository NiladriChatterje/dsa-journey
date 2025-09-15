/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const letterSet = new Set(brokenLetters);
    let count = 0;
    let flag = false;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == ' ') {
            count++;
            continue;
        }

        if (letterSet.has(text.charAt(i))) {
            while (i < text.length && text.charAt(i) != " ")
                i++;
            flag = false;
            continue;
        }
        flag = true;
    }
    
    if (flag)
        count++
    return count;
};