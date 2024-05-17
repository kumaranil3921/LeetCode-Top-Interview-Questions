/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replaceAll(/[^0-9A-Za-z]/g, "").toLowerCase();

  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    if (s[start] != s[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};
