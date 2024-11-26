var maxSubArray = function (nums) {
  let f = nums[0],
    ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    f = Math.max(nums[i], f + nums[i]);
    ans = Math.max(ans, f);
  }

  return ans;
};

//Example1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
