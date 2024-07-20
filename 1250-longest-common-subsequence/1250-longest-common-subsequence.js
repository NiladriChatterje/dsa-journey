/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2, dpGrid = new Map()) {
    text1Length = text1.length;
    text2Length = text2.length;

    for (let row = 1; row <= text1Length; row++) {
        for (let col = 1; col <= text2Length; col++) {
            if (text1[row - 1] === text2[col - 1]) 
                dpGrid.set(`${row},${col}`,(dpGrid.get(`${row - 1},${col-1}`)??0)+1);
            else 
                dpGrid.set(`${row},${col}`,Math.max(dpGrid.get(`${row - 1},${col}`)??0, 
                dpGrid.get(`${row},${col-1}`)??0));
            
        }
    }

    return dpGrid.get(`${text1Length},${text2Length}`);
};