/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
   const output = [];
    
    for(let i=1; i<101; i++) {
        if(nums1.includes(i) && nums2.includes(i)) {
           output.push(i);
           } else if(nums1.includes(i) && nums3.includes(i)) {
                     output.push(i);
            } else if(nums2.includes(i) && nums3.includes(i)) {
                output.push(i);
            }
    }
  return output;
};