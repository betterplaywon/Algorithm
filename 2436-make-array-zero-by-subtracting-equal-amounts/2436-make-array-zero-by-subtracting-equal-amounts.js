/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const newNums = nums.filter((num)=> num !== 0);
    const set = new Set(newNums);
    if(set.size === 0) return 0;
    return set.size;
};