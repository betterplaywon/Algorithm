/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
let positive = 0, negative = 0;

    for(const num of nums) {
       if(num > 0) positive += 1;
       if(num < 0) negative += 1;
    }
    return positive > negative ? positive : negative;
};