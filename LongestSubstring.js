// function lengthOfLongestSubstring(str) {
//     let longest = "",pos=0;let arr1 = [];
//     for (let i = 0; i < str.length; i++) {
//         if (!longest.includes(str[i])) {
//             longest += str[i];

//         }else{
//             i=++pos;
//             arr1.push(longest);
//             longest = str[i];
//         }
//     }arr1.push(longest);
//     const maxSizedSubstring = Math.max(...arr1.map(item => item.length))
//     return maxSizedSubstring;
// }

const lengthOfLongestSubstring = str => {
    const map = new Map();
    let count = 0, lastCount = 0, lastMarked = 0;
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) count++;
        else {
            lastCount = lastCount >= count ? lastCount : count;
            count = i - map.get(str[i]);
            for (let j = map.get(str[i]); j >= lastMarked; j--)
                if (map.get(str[j]) < map.get(str[i]))
                    map.delete(str[j])
            lastMarked = map.get(str[i])
        }
        map.set(str[i], i)
    }

    return count > lastCount ? count : lastCount;
}

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcdef"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("nfpdmpi"));
console.log(lengthOfLongestSubstring("wobgrovw"));