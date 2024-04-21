/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    
    for(let i=0; i<nums.length; i++) {
        const mod = i%10;
        if(nums[i] === mod) return i;
    }
    return -1;
};