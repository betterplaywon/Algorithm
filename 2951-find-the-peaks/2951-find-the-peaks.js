/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    const output = [];
    
    for(let i=1; i<mountain.length; i++) {
        const condition1 = mountain[i-1] < mountain[i];
        const condition2 = mountain[i+1] < mountain[i];
        if(condition1 && condition2) output.push(i);
    }
    return output;
};