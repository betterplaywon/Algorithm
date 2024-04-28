/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const output = [];
    const charCode = (char) => char.charCodeAt();
    
   for(let i = charCode(s[0]); i <= charCode(s[3]); i++) {
       for(let j=s[1]; j <= s[4]; j++) {
           const char = String.fromCharCode(i);
           output.push(char+j);
       }
   }
    return output;
};