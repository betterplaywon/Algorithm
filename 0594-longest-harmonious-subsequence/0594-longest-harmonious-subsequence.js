/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const sort = nums.sort((a,b)=> a-b);
    
   let left = 0; right= 1; result = 0;
while(right < sort.length){
let diff = sort[right] - sort[left];
if (diff == 1) {
result = Math.max(result, right-left + 1)
}
if (diff <= 1){
right++;
}
else{
left++
}
}
return result
    
};