/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let c = 0;
  for (let i = s.length - 1; i >= c; i--) {
    [s[i], s[c]] = [s[c], s[i]];
    c++;
  }
};
