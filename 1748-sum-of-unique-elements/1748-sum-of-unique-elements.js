/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const output = nums.reduce((acc,cur)=> nums.indexOf(cur) === nums.lastIndexOf(cur) ? acc+cur : acc,0);
    return output;
};