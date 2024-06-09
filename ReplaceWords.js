`leetcode 648`
//`version 1 :) caught TLE at last Test case`
// const replaceWords = function (dictionary, sentence) {
//     const map = new Map();
//     for (let i of dictionary)
//         map.set(i, i.length);

//     const spaceIndexArr = [];
//     for (let i = 0; i < sentence.length; i++)
//         if (sentence[i] === ' ') spaceIndexArr.push(i);

//     let ind = 0;
//     const resultArray = [];
//     let str = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === ' ') {
//             resultArray.push(str);
//             str = '';
//             ind++;
//             continue
//         }
//         str += sentence[i];
//         if (map.has(str)) {
//             i = spaceIndexArr[ind]
//             ind++;
//             resultArray.push(str);
//             str = ''

//         }
//     }
//     if (str !== '') resultArray.push(str)
//     return resultArray.join(' ');
// };

// `version 2`
const replaceWords = function (dictionary, sentence) {
    const map = new Map();
    for (let i of dictionary)
        map.set(i, i.length);

    let flag = false;
    let result = ''
    let str = '';
    for (let i = 0; i < sentence.length; i++) {
        if (flag) {
            if (sentence[i] === ' ') { flag = false; result += ' '; str = '' }
            continue
        }
        if (sentence[i] === ' ') {
            result += str + ' '
            str = '';
            continue
        }
        str += sentence[i];
        if (map.has(str)) {
            flag = true;
            result += str
            str = ''
        }
    }
    if (str !== '') result += str;
    return result;
};
console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"))
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"))