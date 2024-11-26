/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (const a of intervals) {
    console.log(a);
  }

  let ans = [];

  let start = intervals[0][0],
    end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (end < intervals[i][0]) {
      ans.push([start, end]);
      [start, end] = [intervals[i][0], intervals[i][1]];
    } else {
      end = end >= intervals[i][1] ? end : intervals[i][1];
    }
  }
  ans.push([start, end]);

  return ans;
};

//Example1
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
