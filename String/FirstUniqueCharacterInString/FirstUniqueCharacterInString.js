/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let length = s.length;
  let obj = {};
  for (let i = 0; i < length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (let i = 0; i < length; i++) {
    if (obj[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};
