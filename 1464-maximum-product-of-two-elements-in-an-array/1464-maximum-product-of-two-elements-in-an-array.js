/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const output= [];
    
    for(let i=0; i<nums.length-1; i++) {
        for(j=i+1; j<nums.length; j++) {
           output.push((nums[i]-1) * (nums[j]-1));
        }
    }
    return Math.max(...output);
};