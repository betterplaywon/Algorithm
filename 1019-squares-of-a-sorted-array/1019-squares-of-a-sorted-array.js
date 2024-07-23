/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const output = [];
    for(num of nums) output.push(num**2);
    return output.sort((a,b)=> a-b);
};