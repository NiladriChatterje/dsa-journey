var reverseVowels = function (s) {
    let i = 0;
    let j = s.length - 1;
    const charArray = s.split('');
    console.log(charArray)
    while (i < j) {
        while (i < j) {
            if (charArray[i] === 'a' || charArray[i] === 'e' ||
                charArray[i] === 'i' || charArray[i] === 'o' || charArray[i] === 'u' ||
                charArray[i] === 'A' || charArray[i] === 'E' || charArray[i] === 'I' ||
                charArray[i] === 'O' || charArray[i] === 'U')
                break;
            i++
        }

        while (i < j) {
            if (charArray[j] === 'a' || charArray[j] === 'e' ||
                charArray[j] === 'i' || charArray[j] === 'o' || charArray[j] === 'u' ||
                charArray[j] === 'A' || charArray[j] === 'E' || charArray[j] === 'I' ||
                charArray[j] === 'O' || charArray[j] === 'U')
                break
            j--;
        }

        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
        i++;
        j--

    }

    return charArray.join('');
};

console.log(reverseVowels("hello"))