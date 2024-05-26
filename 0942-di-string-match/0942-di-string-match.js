/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let max = s.length;
    let min = 0;
    const output = [];
    
    for(const char of s) {
        if(char === 'I') {
            output.push(min);
            min++;
        } else {
            output.push(max);
            max--;
        }
    }
    output.push(min);
    return output;
};