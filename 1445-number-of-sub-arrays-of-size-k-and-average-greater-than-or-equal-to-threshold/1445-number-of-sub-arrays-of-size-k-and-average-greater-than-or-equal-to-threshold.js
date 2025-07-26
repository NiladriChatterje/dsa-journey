/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(i<k)
            sum += arr[i];
        else{
            if(sum/k>=threshold)
                count++;

            sum -= arr[i-k];
            sum += arr[i];
        }
    }
    if(sum/k>=threshold)
                count++;
    return count;
};