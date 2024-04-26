function lengthOfLongestSubstring(str) {
    let longest = "",pos=0;let arr1 = [];
    for (let i = 0; i < str.length; i++) {
        if (!longest.includes(str[i])) {
            longest += str[i];
            
        }else{
            i=++pos;
            arr1.push(longest);
            longest = str[i];
        }
    }arr1.push(longest);
    const maxSizedSubstring = Math.max(...arr1.map(item => item.length))
    return maxSizedSubstring;
}

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcdef"));
console.log(lengthOfLongestSubstring(""));