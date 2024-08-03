var canBeEqual = function (target, arr) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < target.length; i++) {
        right = left;
        while (right < arr.length && arr[right] !== target[i])
            right++;

        if (right >= arr.length) return false;

        for (let j = left; j <= left + parseInt((right - left) / 2); j++)
            [arr[j], arr[right + left - j]] = [arr[right + left - j], arr[j]];

        left++;
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++)
        if (arr[i] !== target[i])
            return false
    return true;
};