/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    // nums[i]를 빈 배열의 index[i]번에 추가해야 한다.
    let result = [];
    
    for(let i=0; i<nums.length; i++) {
       result.splice(index[i],0,nums[i])
    }
   return result;
};