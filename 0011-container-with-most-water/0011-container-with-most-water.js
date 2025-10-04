/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let maxWater = 0;
    let left = 0, right = height.length - 1;
    while (left <= right) {
            maxWater = Math.max(maxWater,Math.min(height[left], height[right]) * (right - left));

        if (height[left] === height[right]) {
            if (height[left + 1] > height[right - 1]) left++
            else right--;
            continue
        }

        if (height[left] < height[right]) left++
        else right--;
    }
    return maxWater
}