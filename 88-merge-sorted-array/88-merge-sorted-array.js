/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = nums1.length - 1  
  while (p1 > -1 && p2 > -1) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
  }
  while (p1 > -1) {
    nums1[p] = nums1[p1]
    p1--
    p--
  }
  while (p2 > -1) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
};