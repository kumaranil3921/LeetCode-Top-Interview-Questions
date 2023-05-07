/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Solution 1

  /*
    let i =0;
    let duplicate = false;
    while(i < nums.length){
        let currentElementIndex = nums.indexOf(nums[i])
        console.log(currentElementIndex)
        if(currentElementIndex != i && currentElementIndex !=-1){
            duplicate = true;
            break;
        }
        i++;
    } 
    return duplicate
  */

  // Solution 2

  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashTable.has(nums[i])) return true;
    else hashTable.set(nums[i], true);
  }
  return false;
};
