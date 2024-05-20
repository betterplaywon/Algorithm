/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=> a-b);
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const secondMax = nums[nums.length-2];
    const secondMin = nums[1];
    return (max*secondMax) - (min*secondMin);
};