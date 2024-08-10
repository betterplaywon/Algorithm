/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const map = new Map();
     arr.forEach(int => map.set(int, (map.get(int) || 0) + 1));

     for(const [key,value] of map) {
        if(value > arr.length/4) {
            return key;
        }
     }
};
