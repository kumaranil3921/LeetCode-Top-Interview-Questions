/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let b = [];
  while (n > 0) {
    b.push(n % 2);
    n = Math.floor(n / 2);
  }
  return b.reduce((v1, v2) => v1 + v2, 0);
};
