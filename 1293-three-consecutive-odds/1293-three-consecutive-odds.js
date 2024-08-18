/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0;

    for(const num of arr) {
        num % 2 === 0 ? count=0 : count++;
        if(count === 3) return true;
    }
    return false;
};