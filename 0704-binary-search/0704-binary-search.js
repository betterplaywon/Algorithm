/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
const finding = nums.findIndex(num => num === target);
    
    const isInclude = nums.includes(target);
    
    return isInclude ? finding : -1;
    
};