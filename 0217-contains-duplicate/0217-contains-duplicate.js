/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const set = new Set(nums);
    const convertArr = Array.from(set);
    const result = convertArr.length < nums.length;
    return result;
};