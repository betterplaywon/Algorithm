/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // nums1의 요소를 nums2에서 찾아 그 다음 수가 큰 수라면 그 수를, 요소의 다음값이 작거나 없다면 -1
    
    let result = [];
    
    for(let i=0; i<nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]); // 2,0,3
        let greaterNum = 0;
        
        for(let j= index+1; j<nums2.length;j++) {
            if(nums2[j] > nums2[index]) {
                greaterNum = nums2[j]
                break;
            }
        }
    if(nums2[index] < greaterNum) {
        result.push(greaterNum)
    } else {
        result.push(-1)
    }
    }
    return result;
};