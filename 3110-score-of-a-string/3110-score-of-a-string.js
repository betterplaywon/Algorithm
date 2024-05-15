/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let output = 0;
    const arr = s.split('');
    
    for(let i=0; i<arr.length-1; i++) {
        output += Math.abs(arr[i].charCodeAt() - arr[i+1].charCodeAt());
    }
    return output;
};