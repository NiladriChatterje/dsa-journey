const nextPermutation = (nums) => {
    let j;
    let k = 0;
    let secondMin = Infinity, min = 200, index = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            j = i, k = 0
            while (j < nums.length - 1 - k) {
                if (nums[nums.length - 1 - k] < min && min > nums[i - 1] && min < secondMin) {
                    secondMin = min;
                    min = nums[nums.length - 1 - k];
                    index = j;
                }
                nums[j] += nums[nums.length - 1 - k];
                nums[nums.length - 1 - k] = nums[j] - nums[nums.length - 1 - k];
                nums[j] -= nums[nums.length - 1 - k];
                k++;
                j++
            }
            if (index != 1) {
                nums[i - 1] += nums[index];
                nums[index] = nums[i - 1] - nums[index];
                nums[i - 1] -= nums[index]
            }
            index = -1;

            return nums;
        }
    }

    return nums.reverse()
};

console.log(nextPermutation([1, 3, 2]));