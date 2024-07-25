

var sortArray = function (nums) {
    let counting = new Array(2 * 50000 + 1).fill(0);
    for (let i of nums)
        counting[i + 50000]++;

    let writeInd = 0;
    for (let numberInd = 0; numberInd < counting.length; numberInd++) {
        let freq = counting[numberInd];
        while (freq != 0) {
            nums[writeInd] = numberInd - 50000;
            writeInd++;
            freq--;
        }
    }
    return nums;
};