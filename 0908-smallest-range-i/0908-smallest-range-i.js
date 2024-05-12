/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    if(nums.length === 1) return 0;
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    return Math.max(0, max-min-k*2);
};