const MAX = 2 ** 31 - 1;
const MIN = -(2 ** 31);
const myAtoi = (s) => {
  let i = 0;
  while (s[i] === " ") i++;
  let sign = 1;
  if (s[i] === "+" || s[i] === "-") {
    if (s[i] === "-") sign = -1;
    i++;
  }
  let number = 0;
  while (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
    number = number * 10 + +s[i];
    i++;
  }
  const answer = sign * number;
  return sign > 0 ? Math.min(MAX, answer) : Math.max(MIN, answer);
};
