/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    if(k > s.length)  k = k % s.length;
    return s.slice(k)+s.substring(0,k);
};