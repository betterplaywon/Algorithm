/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = new Map();
    
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
   return nums.sort((a, b)=> map.get(a) - map.get(b) || b-a);
};