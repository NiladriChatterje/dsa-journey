/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
    if (k % 2 == 0) return -1;
    let n = 0;
    let length = 1;
    while (length<=k) {
        n = (n * 10 + 1)%k;
        if (n == 0)
            return length;
        length++;
    }
    return -1;
};