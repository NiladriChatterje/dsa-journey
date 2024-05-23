// var substring = (s) => {
//     let arr = [], len = s.length;
//     while (len > 0) {
//         let startIndex = 0;
//         for (let i = len; i <= s.length; i++) {
//             arr.push(s.slice(startIndex, len + startIndex));
//             startIndex++;
//         }
//         len--;
//     }
//     return arr;
// }
// String.prototype.reverse = function () {
//     let reverseString = ''
//     for (let i = this.length - 1; i >= 0; i--)
//         reverseString += this.toString()[i];

//     return reverseString;
// }



// var longestPalindrome = function (s) {
//     const filteredPalindrome = substring(s)
//     for (let i = 0; i < filteredPalindrome.length; i++) {
//         if (filteredPalindrome[i] === filteredPalindrome[i].reverse()) {
//             return filteredPalindrome[i]
//         }
//     }
// };


const longestPalindrome = function (s) {
    let i = 0;
    let r = s.length - 1;
    let result = '';
    let reverse_res = ''
    let last_res = ''

    while (i < s.length) {
        r = s.length - 1;

        while (r >= i) {
            if (s[i] === s[r]) {
                result += s[i];
                if (i !== r)
                    reverse_res += s[r]
            }
            else {
                last_res = result + reverse_res
                result = '';
                reverse_res = '';
            }
            r--
        }

        i++
    }
    return result.length > last_res.length ? result : last_res
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
// console.log(longestPalindrome('zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir'));