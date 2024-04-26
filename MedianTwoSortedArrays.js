var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2);
    nums1.sort((a,b) => b-a)
    if(nums1.length % 2 === 0)
        return (nums1[Math.trunc(nums1.length/2-1)]+nums1[Math.trunc(nums1.length/2)])/2;
    
    else
        return nums1[Math.trunc(nums1.length/2)]
};

console.log(findMedianSortedArrays([1,3,4],[2,5]))