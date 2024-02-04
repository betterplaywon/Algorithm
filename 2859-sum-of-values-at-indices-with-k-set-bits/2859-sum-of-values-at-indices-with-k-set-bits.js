/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let result = 0;
    for(let i=0; i<nums.length; i++) {
     const setBit = i.toString(2).split('1').length-1;
        if(setBit === k) result+=nums[i];
    }
    return result;
};