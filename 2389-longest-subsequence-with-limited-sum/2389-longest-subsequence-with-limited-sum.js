/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b)=> a-b);
    
    const output = [];
    let sum = 0, count = 0;
    
    for(let i=0; i<queries.length; i++) {
        sum = 0;
        count = 0;
        for(let j=0; j<nums.length; j++) {
            sum+=nums[j];
            if(sum <= queries[i]) count+=1;
            else break;
        }
        output.push(count);
    }
    return output;
};