/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if(nums.length === 1 && nums[0] === 0) return [0];
    const evenArr = [];
    const oddArr = [];
    
    for(const num of nums) {
        num % 2 === 0 ? evenArr.push(num) : oddArr.push(num);
    }
    return [...evenArr,...oddArr];
};