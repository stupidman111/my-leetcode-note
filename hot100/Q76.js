/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let ans = "";
  let freqOfT = new Array(52).fill(0),
    freqOfWindow = new Array(52).fill(0);
  let diff = 0;
  for (const ch of t) {
    let idx = getIdx(ch);
    freqOfT[idx]++;
    if (freqOfT[idx] === 1) diff++;
  }

  for (let left = 0, right = 0; right < s.length; right++) {
    let idx1 = getIdx(s[right]);
    freqOfWindow[idx1]++;
    if (freqOfWindow[idx1] === freqOfT[idx1]) diff--; //

    while (left < right) {
      let idx2 = getIdx(s[left]);
      if (freqOfWindow[idx2] - 1 >= freqOfT[idx2]) {
        freqOfWindow[idx2]--;
        left++;
      } else {
        break;
      }
    }

    if (diff === 0 && (ans.length === 0 || ans.length > right - left + 1)) {
      ans = s.slice(left, right + 1);
    }
  }

  return ans;
};

function getIdx(ch) {
  if (ch.charCodeAt(0) >= "a".charCodeAt(0))
    return ch.charCodeAt(0) - "a".charCodeAt(0);
  return ch.charCodeAt(0) - "A".charCodeAt(0) + 26;
}

//Example1
console.log(minWindow("ADOBECODEBANC", "ABC"));
