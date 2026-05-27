/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    const lastLower = {};  // last index of lowercase c
    const firstUpper = {}; // first index of uppercase c

    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (c >= 'a' && c <= 'z') {
            lastLower[c] = i;
        } else {
            const lower = c.toLowerCase();
            if (!(lower in firstUpper)) {
                firstUpper[lower] = i;
            }
        }
    }

    let count = 0;
    for (const c in firstUpper) {
        if (c in lastLower && lastLower[c] < firstUpper[c]) {
            count++;
        }
    }

    return count;
};