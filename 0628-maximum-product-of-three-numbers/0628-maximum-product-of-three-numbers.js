/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // const a = [-100,-98,-1,2,3,4]; 를 예시로 들었을 때
    // a.sort((a,b)=> Math.abs(b-a)); 를 해줘도
    // [-100, -98, -1, 2, 3, 4]로 출력이 되어 4가 붙지 않는게 잠깐 막힘.
    
    // solution
    // 예시처럼 큰 음수가 앞에 몰려있고 끝에 양수 최고값이 있을 때 조건1
    // 양수 배열만 있을 땐 length에서 -1, -2, -3씩 빼주는 방법으로 조건2
    
    nums.sort((a,b)=> a-b);
    const length = nums.length;
    const condition1 = nums[0]* nums[1]*nums[length-1]; // 음수와 양수 혼합배열일 때
    const condition2 = nums[length-1]* nums[length-2]*nums[length-3];// 양수배열일 때
    
    return Math.max(condition1, condition2);
    
};