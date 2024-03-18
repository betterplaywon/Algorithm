/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    s.split('').sort();
    let output = '';
    
   for(let i=0; i<s.length; i++) {
        const lowerCase =s[i].toLowerCase();
        const upperCase = s[i].toUpperCase();
       const hasLowerCase = s.includes(lowerCase);
        if(s[i] === upperCase && hasLowerCase) output = output < s[i] ? s[i] : output;
   }
    return output;
};