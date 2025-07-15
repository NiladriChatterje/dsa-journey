/**
 * @param {string} word
 * @return {boolean}
 */

const isVowel = (char) => {
    switch (char) {
        case 'a':
        case 'A': return true;

        case 'e':
        case 'E': return true;

        case 'i':
        case 'I': return true;

        case 'o':
        case 'O': return true;

        case 'u':
        case 'U': return true;
    }

    return false;
}


var isValid = function (word) {
    if (word.length < 3) return false;

    let vowelCheck = false;
    let consonentCheck = false;
    let charCode;

    for (let character of word) {
        charCode = character.charCodeAt(0)

        if (!((charCode >= 48 && charCode <= 57)
            || (charCode >= 65 && charCode <= 90)
            || (charCode >= 97 && charCode <= 122)))
            return false;

        if ((charCode >= 65 && charCode <= 90)
            || (charCode >= 97 && charCode <= 122)) {
            if (isVowel(character))
                vowelCheck = true;
            else
                consonentCheck = true;
        }
    }

    return vowelCheck && consonentCheck;
};