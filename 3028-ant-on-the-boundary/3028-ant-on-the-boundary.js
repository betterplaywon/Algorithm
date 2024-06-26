/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let sum = 0, count = 0;
  
    for(const num of nums) {
        sum += num;
        if(sum === 0) count++;
    }
    return count;
};