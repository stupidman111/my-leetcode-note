/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let x = 0,
    y = n - 1;

  while (x < m && y >= 0) {
    if (matrix[x][y] > target) {
      y--;
    } else if (matrix[x][y] < target) {
      x++;
    } else {
      return true;
    }
  }

  return false;
};

//Example1
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
