// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // we are starting from the end
    // i points to last 
    let i = m - 1, j = n - 1, k = m + n - 1;
    //arrays are already sorted in ascending order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            //put the greater number at k-th index
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    //when i is not zero yet
    while (i >= 0) {
        nums1[k] = nums1[i];
        i--; k--;
    }
    //when j is not yet zero
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--; k--;
    }
};