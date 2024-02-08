/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b)=> a-b);
    const result = [];
    
   while(nums.length) {
       const even = nums.shift();
       const odd =nums.shift();
       result.push(odd,even);
   }
    return result;
};