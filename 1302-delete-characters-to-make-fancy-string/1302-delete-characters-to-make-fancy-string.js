/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const result = [];

    for(let i=0;i<s.length-2;i++){
        if(s.charAt(i)==s.charAt(i+1) && s.charAt(i+1)==s.charAt(i+2))
            continue;

        result.push(s.charAt(i));
    }
    result.push(s.charAt(s.length-2),s.charAt(s.length-1))
    return result.join("");
};