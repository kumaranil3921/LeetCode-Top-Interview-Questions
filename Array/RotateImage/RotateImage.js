/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let matrixLength = matrix.length;
  let s = 0;
  let e = matrix.length - 1;
  while (s < e) {
    let tmp = matrix[s];
    matrix[s] = matrix[e];
    matrix[e] = tmp;
    s++;
    e--;
  }
  for (let j = 0; j < matrixLength; j++) {
    for (let k = j + 1; k < matrix[j].length; k++) {
      let t = matrix[j][k];
      matrix[j][k] = matrix[k][j];
      matrix[k][j] = t;
    }
  }

  return matrix;
};
