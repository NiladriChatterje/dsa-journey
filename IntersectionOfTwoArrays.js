`350 Intersection of Two Arrays`

const intersect = function (nums1, nums2) {
    if (nums1.length == 0 || nums2.length === 0) return [];
    const map = new Map();
    const smaller = nums1.length < nums2.length ? nums1 : nums2;
    const greater = nums1.length >= nums2.length ? nums1 : nums2;
    for (let i of smaller)
        map.set(i, (map.get(i) ?? 0) + 1);

    const result = [];
    for (let i of greater)
        if (map.get(i)) {
            result.push(i);
            map.set(i, map.get(i) - 1)
        }


    return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));
