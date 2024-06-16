/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const output = {};
    
    for(const [key,value] of nums1) {
        output[key] = value;
    }
    
    for(const [key,value] of nums2) {
        output[key] = (output[key] || 0) + value;
    };
    return Object.entries(output).map(([key, value]) => [Number(key), value]);
};