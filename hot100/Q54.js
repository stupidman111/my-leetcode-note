/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;
  let sum = m * n;
  let ans = [];
  while (sum > 0) {
    for (let i = left; i <= right && sum > 0; i++) {
      ans.push(matrix[top][i]);
      sum--;
    }
    top++;
    for (let i = top; i <= bottom && sum > 0; i++) {
      ans.push(matrix[i][right]);
      sum--;
    }
    right--;
    for (let i = right; i >= left && sum > 0; i--) {
      ans.push(matrix[bottom][i]);
      sum--;
    }
    bottom--;
    for (let i = bottom; i >= top && sum > 0; i--) {
      ans.push(matrix[i][left]);
      sum--;
    }
    left++;
  }
  return ans;
};

//Example1
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
