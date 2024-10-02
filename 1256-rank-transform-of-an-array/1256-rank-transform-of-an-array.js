/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const map = new Map();
    const ascent = [...new Set(arr)].sort((a,b)=> a-b);

    for(let i=0; i<ascent.length; i++) {
        map.set(ascent[i], i+1);
    }
    return arr.map((num)=> map.get(num));
};