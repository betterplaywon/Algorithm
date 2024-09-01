/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {

    for(let i=0; i<nums.length; i++) {
       if(nums[i] === nums[i+1]) {
        nums[i]*=2;
        nums[i+1] = 0;
       }
    }
    const isNotZero = nums.filter((num)=> num !== 0);
    const isZero = nums.filter((num)=> num === 0);
    return [...isNotZero,...isZero];
};