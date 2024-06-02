/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const obj = {};
    
    for(const num of arr) {
        obj[num] = (obj[num] || 0) + 1;
    }
    const lengthArr = Object.values(obj);
    const set = new Set(lengthArr);
    return lengthArr.length === set.size;
};