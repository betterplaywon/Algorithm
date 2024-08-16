/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const map = new Map();
    let count = 0;

    for(const word of words) {
       const Deduplication = new Set(word.split(''));
       const key = Array.from(Deduplication).sort().join('');

       if(map.has(key)) {
        count+=map.get(key);
        map.set(key,map.get(key)+1);
       } else {
        map.set(key,1);
       }
    }
    return count;
};