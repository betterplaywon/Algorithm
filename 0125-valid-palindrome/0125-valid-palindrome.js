/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) return true;
    
const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
const originText = s.replace(reg, "").toLowerCase();
 const reverseText = originText.split('').reverse().join('');
    
    return originText === reverseText;
};