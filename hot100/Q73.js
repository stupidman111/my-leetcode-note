/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let a = false,
    b = false; //a：首行存在0，b：首列存在 0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] == 0) {
      b = true;
      break;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] == 0) {
      a = true;
      break;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[0][j] = matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 1; j < n; j++) matrix[i][j] = 0;
    }
  }
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] == 0) {
      for (let i = 1; i < m; i++) matrix[i][j] = 0;
    }
  }

  if (a) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
  if (b) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

//Example1
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix);
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    console.log(matrix[i][j]);
  }
}
