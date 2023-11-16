/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
let result = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
for(let num of set1) {
    const isSet1Num = set2.has(num);
    if(isSet1Num) {
        result.push(num);
    }
}
   return result;
};