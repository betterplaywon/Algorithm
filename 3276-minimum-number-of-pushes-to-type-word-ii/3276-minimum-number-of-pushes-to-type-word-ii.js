/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const map = new Map();
    let count = 1, minimum = 0;
    for(char of word) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    const arr = [...map.values()].sort((a,b)=>b-a);

    for(let i=0; i<arr.length; i++) {
        minimum+=arr[i]*count;

        if((i+1)%8 === 0) count++;
    }
    return minimum;
};