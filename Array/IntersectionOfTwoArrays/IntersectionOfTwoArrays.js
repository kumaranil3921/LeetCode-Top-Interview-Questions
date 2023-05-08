/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // Solution 1
  /*
    let result = [];
    for (var i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        result.push(nums2[i]);
        nums1.splice(nums1.indexOf(nums2[i]), 1);
      }
    }
    return result;
  */

  // Solution 2
  const result = [];
  const map = {};
  for (let i of nums1) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }
  for (let i of nums2) {
    if (map[i] > 0) {
      result.push(i);
      map[i]--;
    }
  }
  return result;
};
