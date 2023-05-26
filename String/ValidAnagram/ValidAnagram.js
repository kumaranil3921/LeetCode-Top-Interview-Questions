/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sLength = s.length;
  let tLength = t.length;
  if (sLength !== tLength) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < sLength; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (let i = 0; i < tLength; i++) {
    if (!obj[t[i]]) {
      return false;
    } else {
      obj[t[i]]--;
    }
  }
  return true;
};
