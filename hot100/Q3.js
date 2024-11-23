function lengthOfLongestSubstring(s) {
  let set = new Set();
  let ans = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      //当前右端点字符已经存在
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}

//case1：
console.log(lengthOfLongestSubstring("abcabcbb"));
