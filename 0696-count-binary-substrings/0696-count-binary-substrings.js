/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const split = s.split('');
    let prev = 0;
    let curr = 0;
    let output = 0;
    
    for(let i=0; i< split.length; i++) {
    if(split[i] === split[i-1]){
        curr++; // 2,1,2,1,2,1,2;
    } else {
        output += Math.min(prev,curr); // 0, 2, 4, 6
        prev = curr; // 2,2,2;
        curr = 1;
    }
    }
    return output+Math.min(prev, curr);
    
};