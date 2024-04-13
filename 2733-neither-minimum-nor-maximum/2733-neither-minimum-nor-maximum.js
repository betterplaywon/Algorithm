/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length <= 2) return -1;
    const sortingNums = nums.sort((a,b)=> a-b);
    return sortingNums[1];
};