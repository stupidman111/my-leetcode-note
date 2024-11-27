/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  for (const x of nums) console.log(x);
};

function reverse(nums, start, end) {
  while (start < end) {
    // let tmp = nums[start];
    // nums[start] = nums[end];
    // nums[end] = tmp;
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++, end--;
  }
}

//Example1
rotate([1, 2, 3, 4, 5, 6, 7], 3);
