/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
   let map = {};
    const letterArr = s.split('');
    
    for(const letter of letterArr) {
        map[letter] = (map[letter] || 0) + 1;
    }
    const set = new Set(Object.values(map));
    return set.size === 1;
};