var mergeAlternately = function (word1, word2) {
    let s = '';
    const word1Arr = word1.split('');
    const word2Arr = word2.split('');
    const longWord = new Array(word1Arr.length + word2Arr.length);
    const smallLen = word1Arr.length < word2Arr.length ? word1Arr : word2Arr;
    const largeArr = word1Arr.length > word2Arr.length ? word1Arr : word2Arr;
    let k = 0
    let small = smallLen.length * 2
    for (let i = 0; i < small; i += 2) {
        longWord[i] = word1Arr[k];
        longWord[i + 1] = word2Arr[k++];
    }

    while (small < longWord.length)
        longWord[small++] = largeArr[k++];

    return longWord.join('')
};

console.log(mergeAlternately('abc', "pqr"))
console.log(mergeAlternately('abcd', "pq"))