`leetcode: 3 sum closest`

function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    let i = 0;
    let j = 0;
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(l = 0, r = this.length - 1) {
    if (l >= r)
        return;

    let m = l + parseInt((r - l) / 2);
    this.mergeSort(l, m);
    this.mergeSort(m + 1, r);
    merge(this, l, m, r);
}

Array.prototype.mergeSort = mergeSort;

function threeSumClosest(nums, target) {
    nums.mergeSort();
    let closestSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(target - sum) < Math.abs(target - closestSum))
                closestSum = sum;

            if (sum < target)
                j++;
            else
                k--;
        }
    }
    return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 3, 97, 102, 200], 300))