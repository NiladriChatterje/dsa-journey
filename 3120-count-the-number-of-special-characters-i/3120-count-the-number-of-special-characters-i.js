/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    const set = new Set();
    let count = 0;

    for (let i of word) {
        if(set.has(i.toLowerCase()) && set.has(i.toUpperCase()))
            continue;

        if (i.toUpperCase() == i && set.has(i.toLowerCase())) 
            count++
        
        else if (i.toLowerCase() == i && set.has(i.toUpperCase())) 
            count++;
        
        set.add(i);
    }

    return count;
};