/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverseString = (string) => {
    const reverse = string.split('').reverse().join('');
    return reverse;
}

var reverseStr = function(s, k) {
    let result = '';
    let newString = '';
    
  for(let i = 0; i < s.length; i += 2*k) {
      newString = s.substr(i, 2*k);
      if(newString.length < k) {
         result += reverseString(newString); 
      } else {
          result += reverseString(newString.substr(0, k)) + newString.substr(k)
      }
  }
    return result;
};