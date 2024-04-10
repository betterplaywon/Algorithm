/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const set = new Set();
    let count = 0;
    
    for(let i=0; i< nums.length; i++) {
        if(set.has(nums[i])) {
            set.delete(nums[i]);
            count++;
        } else {
            set.add(nums[i]);
        }
    }
    return [count,set.size]
};