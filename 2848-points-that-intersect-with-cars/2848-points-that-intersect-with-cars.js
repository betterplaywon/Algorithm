/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const arr = [];
    
    for(let i=0; i<nums.length; i++) {
        for(let j=nums[i][0]; j<=nums[i][1]; j++) {
            arr.push(j);
        }
    }
    const set = new Set(arr);
    return set.size;
};