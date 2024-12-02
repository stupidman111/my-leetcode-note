/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  //先转置，然后每一行 行内 reverse

  let n = matrix.length;
  //1. 转置
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  //2. 行内 reverse
  for (let i = 0; i < n; i++) {
    for (let left = 0, right = n - 1; left < right; left++, right--) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
    }
  }
};

//Example1
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    console.log(matrix[i][j]);
  }
}
