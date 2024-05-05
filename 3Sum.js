/*Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.*/
const sortEle = (leftEle, middle, rightEle) => {
    if (leftEle > middle) {
        leftEle += middle;
        middle = leftEle - middle;
        leftEle -= middle
    }
    if (leftEle > rightEle) {
        leftEle += rightEle;
        rightEle = leftEle - rightEle;
        leftEle -= rightEle
    }
    if (middle > rightEle) {
        middle += rightEle;
        rightEle = middle - rightEle;
        middle -= rightEle;
    }
    return [leftEle, middle, rightEle]
}

const threeSum = function (nums) {
    if (nums.every(item => item === 0)) return [[0, 0, 0]]
    const map = new Map();
    const storeFirstIndex = new Map();
    const storeLastIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (storeFirstIndex.get(nums[i]) === undefined)
            storeFirstIndex.set(nums[i], i)
        if (storeLastIndex.get(nums[nums.length - 1 - i]) === undefined)
            storeLastIndex.set(nums[nums.length - 1 - i], nums.length - 1 - i)
    }
    const arr = [];
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        for (let i = 0; i < right; i++) {
            let getDiff = -(nums[i] + nums[right]);
            let getDiff2 = -(nums[right - i] + nums[left]);
            if (storeFirstIndex.get(getDiff) !== undefined && storeFirstIndex.get(getDiff) !== i && storeFirstIndex.get(getDiff) !== right && right !== i) {
                let leftEle = nums[i], rightEle = nums[right], middle = nums[storeFirstIndex.get(getDiff)];

                const [leftElement, middleElement, rightElement] = sortEle(leftEle, middle, rightEle)

                if (!map.get(`${leftElement},${middleElement},${rightElement}`)) {
                    map.set(`${leftElement},${middleElement},${rightElement}`, true)
                    arr.push([leftElement, middleElement, rightElement]);
                }
            }
            if (storeLastIndex.get(getDiff2) !== undefined && storeLastIndex.get(getDiff2) !== right - i && storeLastIndex.get(getDiff2) !== left && left !== right - i) {
                let leftEle = nums[right - i], rightEle = nums[left], middle = nums[storeLastIndex.get(getDiff2)];

                const [leftElement, middleElement, rightElement] = sortEle(leftEle, middle, rightEle)

                if (!map.get(`${leftElement},${middleElement},${rightElement}`)) {
                    map.set(`${leftElement},${middleElement},${rightElement}`, true)
                    arr.push([leftElement, middleElement, rightElement]);
                }
            }
        }
        left++;
        right--;
    }
    return arr;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-2, 0, 1, 1, 2]));
// console.log(threeSum([-2, 0, 0, 2, 2]));
// console.log(threeSum([-1, 0, 1, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
//[-4,-1,-1,0,1,2]
//[]
//[-4,-3,-2,-1,-1,0,0,1,2,3,4]
//[-1,0,0,1]
