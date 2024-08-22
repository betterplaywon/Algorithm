/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map();

    for(const num of arr) {
        map.set(num, (map.get(num)||0) + 1)
    }

    const filter = arr.filter((num)=> num === map.get(num));
    const output = Math.max(...filter,-1);
    return output;
};