/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
   const arr = [];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === arr[arr.length-1]) {
            arr.pop();
        } else{
            arr.push(s[i]);
        }
    }
    return arr.join('');
};