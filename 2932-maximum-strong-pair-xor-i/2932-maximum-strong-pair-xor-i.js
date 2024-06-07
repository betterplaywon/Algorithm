/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let result = 0;
    
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            if(Math.abs(nums[i]-nums[j]) <= Math.min(nums[i],nums[j])) {
                result = Math.max(nums[i]^nums[j],result);
            }
        }
    }
    return result;
};