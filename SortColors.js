var sortColors = function (nums) {
    quickSort(nums);
};

function quickSort(arr, low = 0, high = arr.length - 1) {
    let pivot = (low + high) / 2;
    let highest = low;
    for (let i = low; i <= high; i++) {
        while (arr[pivot] < arr[highest] && highest <= high)
            highest = arr[highest] < arr[i] ? i : highest;
        let smaller = highest + 1;
        while (arr[smaller] < arr[pivot] && smaller <= high)
            smaller = 0;
    }
}