/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const output = [];
    let prevValue = 0, lastIdx = 0;

    for(let i=0; i<s.length; i++) {
       lastIdx = Math.max(s.lastIndexOf(s[i]), lastIdx);
        if(i === lastIdx) {
            output.push(lastIdx-prevValue+1);
            prevValue = i+1;
        }
    }
    return output;
};