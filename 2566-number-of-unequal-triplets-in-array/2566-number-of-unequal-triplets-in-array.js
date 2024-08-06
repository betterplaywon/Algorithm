/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;

    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            for(let k=0; k<nums.length; k++) {
                const condition1 = i<j && j<k;
                const condition2 = nums[i]!==nums[j] && nums[i]!==nums[k] &&
                nums[j]!==nums[k];
                if(condition1 && condition2) count+=1; 
            }
        }
    }
    return count;
};