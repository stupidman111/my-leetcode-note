/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let preSumMap = new Map();
  let preSum = 0,
    ans = 0;
  preSumMap.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    if (preSumMap.has(preSum - k)) {
      ans += preSumMap.get(preSum - k);
    }
    preSumMap.set(preSum, (preSumMap.get(preSum) ?? 0) + 1);
  }
  return ans;
};

console.log(subarraySum([1, 1, 1], 2));
