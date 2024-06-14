/**
 * @param {string} s
 * @return {boolean}
 */
const BRACKETS_PAIR_MAP = {
  "(": ")",
  "[": "]",
  "{": "}",
};
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == BRACKETS_PAIR_MAP[stack[stack.length - 1]]) {
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  return stack.length === 0;
};

isValid("()");
