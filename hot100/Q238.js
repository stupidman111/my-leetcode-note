/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let pre = new Array(n).fill(0),
    suf = new Array(n).fill(0);
  pre[0] = suf[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] * nums[i - 1]; //1, 1, 2, 6
    suf[n - i - 1] = suf[n - i] * nums[n - i]; //(1, 4, 12, 24).reverse() => (24, 12, 4, 1)
  }

  let ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    ans[i] = pre[i] * suf[i];
  }

  return ans;
};

//Example1
console.log(productExceptSelf([1, 2, 3, 4]));
