`leetcode 1805`;
// var numDifferentIntegers = function (word) {
//     const word = word.split('');
//     const set = new Set();
//     let s = '';
//     let charCode;
//     for (let i = 0; i < word.length; i++) {
//         charCode = word[i].charCodeAt(0)
//         if (charCode >= 48 && charCode <= 57) {
//             if (s === '' && charCode === 48) {
//                 if (!word[i + 1] &&
//                     !(word[i + 1]?.charCodeAt(0) >= 48 &&
//                         word[i + 1]?.charCodeAt(0) <= 57))
//                     s = word[i];
//                 else s = '';
//                 continue;
//             }
//             else
//                 s += word[i];
//         }
//         else {
//             if (s !== '') {
//                 set.add(parseInt(s));
//                 s = ''
//             }
//         }
//     }
//     if (s !== '')
//         set.add(parseInt(s));
//     return set.size;
// };

var numDifferentIntegers = function (word) {
    const set = new Set();
    let s = '';
    let charCode;
    for (let i = 0; i < word.length; i++) {
        charCode = word[i].charCodeAt(0)
        if (charCode >= 48 && charCode <= 57) {
            if (charCode === 48 && s === '') {
                if ((i + 1) < word.length &&
                    (word[i + 1].charCodeAt(0) >= 48
                        && word[i + 1].charCodeAt(0) <= 57)
                )
                    s = "";
                else if (
                    (i + 1) < word.length &&
                    !(word[i + 1].charCodeAt(0) >= 48
                        && word[i + 1].charCodeAt(0) <= 57)
                )
                    s = word[i];
                else s = '0';
            }
            else {

                s += word[i];
            }

        }
        else {
            if (s !== '') {
                set.add(s);
                s = ''
            }
        }
    }
    if (s !== '')
        set.add(s);

    console.log(set)
    return set.size;
};
console.log(numDifferentIntegers("a123bc34d8ef34"))
console.log(numDifferentIntegers("a1b01c001"))
console.log(numDifferentIntegers("sh8s0"))