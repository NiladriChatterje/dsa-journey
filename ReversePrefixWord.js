`leetcode 2000`
var reversePrefix = function (word, ch) {
    let firstOccurence = word.indexOf(ch);
    if (firstOccurence === -1) return word;
    const charArray = word.split('');
    let i = 0;
    let swap;
    while (i < firstOccurence) {
        swap = charArray[firstOccurence];
        charArray[firstOccurence] = charArray[i];
        charArray[i] = swap
        i++;
        firstOccurence--;
    }

    return charArray.join('');
};
console.log(reversePrefix("word", 'o'))