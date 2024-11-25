/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < k; i++) {
    while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }
  ans.push(nums[deque[0]]);
  for (let i = k; i < n; i++) {
    while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);

    while (deque[0] < i - k + 1) {
      deque.shift();
    }
    ans.push(nums[deque[0]]);
  }
  return ans;
};
//双端队列：队头到队尾维护递减，越界从队头删除，
//[3, 1], [-1, 2]---3
//[3, 1], [-1, 2], [-3, 3]---3
//[5, 4]---5
//[5, 4], [3, 6]---5
//[6, 7]---6
//[7, 8]---7

//Example1
//console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

//Example2
console.log(maxSlidingWindow([1, -1], 1));
