/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverseArray(array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}
var rotate = function (nums, k) {
  // while(k>0){
  //     nums.unshift(nums.pop())
  //     k--;
  // }
  // nums = nums.slice(k+1,nums.length).concat(nums.slice(0,(nums.length -k)))
  let n = nums.length;

  if (n == 1 || k == 0) {
    return;
  }

  k = k % n;
  reverseArray(nums, 0, n - 1);

  reverseArray(nums, 0, k - 1);

  reverseArray(nums, k, n - 1);
};
