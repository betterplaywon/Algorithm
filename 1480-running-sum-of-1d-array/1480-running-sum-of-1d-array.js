/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const arr = [];
    const result = [];
    
    for(let i=0; i<nums.length; i++) {
        arr.push(nums[i]);
        result.push(arr.reduce((acc, curr)=> acc+curr));
    }
    return result;
};