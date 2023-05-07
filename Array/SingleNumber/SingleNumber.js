/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Solution 1:
  /*
    if (nums.length === 1) {
      return nums[0];
    }
    nums = nums.sort();
    let output = nums[nums.length - 1];
    console.log(nums);
    for (let i = 0; i < nums.length - 1; i = i + 2) {
      console.log("iii", i);
      if (nums[i] != nums[i + 1]) {
        output = nums[i];
        break;
      }
    }

    return output;
  */

  // Solution 2:

  if (nums.length === 1) {
    return nums[0];
  }
  let result = 0;
  nums.forEach((element) => {
    result = result ^ element;
  });
  return result;
};
