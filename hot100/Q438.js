/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let freq = new Array(26).fill(0);
  let ans = [];

  for (const c of p) {
    let idx = c.charCodeAt(0) - "a".charCodeAt(0);
    freq[idx]++;
  }

  for (let left = 0, right = 0; right < s.length; right++) {
    let idx = s[right].charCodeAt(0) - "a".charCodeAt(0);
    freq[idx]--;
    while (freq[idx] < 0) {
      let idx2 = s[left].charCodeAt(0) - "a".charCodeAt(0);
      freq[idx2]++;
      left++;
    }
    if (right - left + 1 == p.length) {
      ans.push(left);
    }
  }

  return ans;
};

//example1
console.log(findAnagrams("cbaebabacd", "abc"));
