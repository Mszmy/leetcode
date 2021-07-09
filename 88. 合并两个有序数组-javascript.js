var merge = function(nums1, m, nums2, n) {
    // 先将nums2 放到nums1的尾部，然后升序排序
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};
