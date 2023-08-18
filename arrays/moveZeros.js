/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // j keeps track of first non zero element
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // when i finds non zero replace j and increment j
    // take absolute value for negative values
    if (Math.abs(nums[i]) > 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  // add zeros after non zeros have been re-ordered
  // at this point, j will have index of last moved number
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
};
