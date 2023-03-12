/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length === 0) return 0;

    const result = s.split(' ').filter((v)=>v).length;
    return result;
};