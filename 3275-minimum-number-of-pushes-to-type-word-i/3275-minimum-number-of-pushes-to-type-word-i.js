/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const arr = word.split('');
    const set = [...new Set(arr)].length;
    let sum = 1;

    for(let i=1; i<set; i++) {
        sum+=Math.trunc(i/8)+1;
    }
    return sum;
};