/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowel = 0;
    let conso = 0;
    const map = new Map();
    let temp;
    for(let i of s){
        temp = (map.get(i)??0)+1;
        map.set(i,temp);

        if(i=='a'||i=='e'||i=='o'||i=='u'||i=='i')
            vowel = Math.max(vowel,temp);
        else
            conso = Math.max(conso,temp);
    }

    return conso + vowel;
};