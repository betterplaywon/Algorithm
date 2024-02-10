/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const numsArr = [];
    for(let i=0; i<nums.length; i+=2) {
       const newArr = new Array(nums[i]).fill(nums[i+1]);
        numsArr.push(...newArr);
    };
  return numsArr;
}