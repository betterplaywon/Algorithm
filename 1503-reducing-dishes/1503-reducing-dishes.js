/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b)=> b-a);
    let count=0,max=0;

    for(const score of satisfaction) {
        count+=score;
        if(count<0) break;
        max+=count;
    }
    return max;
};