/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let arr = [];
    
    for(let element in nums) {
        arr.push(nums[nums[element]])
    }
    return arr;
};