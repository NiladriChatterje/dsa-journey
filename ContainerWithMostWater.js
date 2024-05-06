const maxArea = height => {
    let maxWater = 0;
    let left = 0, right = height.length - 1;
    while (left <= right) {
        if (maxWater < Math.min(height[left], height[right]) * (right - left))
            maxWater = Math.min(height[left], height[right]) * (right - left);

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

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))