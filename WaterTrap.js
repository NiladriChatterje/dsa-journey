'leetcode: rain water trap'
const trap = height => {
    let count = 0, localMaxRightHeight = 0, localMaxLeftHeight = 0, leftTemp = 0;
    let rightTemp = 0;
    let highestGround = 0;
    let highestGroundIndex = 0;
    let i = 0;
    while (i <= height.length - i - 1) {
        if (height[i] >= height[height.length - i - 1] && height[i] >= highestGround) {
            highestGround = height[i];
            highestGroundIndex = i;
        } else if (height[i] < height[height.length - i - 1] && height[height.length - i - 1] > highestGround) {
            highestGround = height[height.length - i - 1];
            highestGroundIndex = height.length - i - 1;
        }
        i++;
    }

    let iteration = highestGroundIndex > height.length - 1 - highestGroundIndex ? highestGroundIndex : height.length - 1 - highestGroundIndex;
    for (let i = 0; i <= iteration; i++) {

        if (height[i] >= localMaxLeftHeight && i <= highestGroundIndex) {
            count += leftTemp;
            leftTemp = 0;
            localMaxLeftHeight = height[i];
        } else if (height[i] < localMaxLeftHeight && i <= highestGroundIndex)
            leftTemp += localMaxLeftHeight - height[i];


        if (height[height.length - i - 1] >= localMaxRightHeight && height.length - i - 1 >= highestGroundIndex) {
            count += rightTemp;
            rightTemp = 0;
            localMaxRightHeight = height[height.length - i - 1];
        }
        else if (height[height.length - i - 1] < localMaxRightHeight && height.length - i - 1 >= highestGroundIndex)
            rightTemp += localMaxRightHeight - height[height.length - i - 1];
    }
    return count
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))