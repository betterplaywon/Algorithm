/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const numsA = nums.slice(0,n);
    const numsB= nums.slice(n,nums.length);
   const result = [];
    
    for(let i=0; i<numsA.length; i++) {
        result.push(numsA[i]);
        result.push(numsB[i]);
    }
    return result;
};