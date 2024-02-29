/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num === 0) return true;
    
    const reverse = Number(String(num).split('').reverse().join(''));
    const secondReverse = Number(String(reverse).split('').reverse().join(''));
   
    return num === secondReverse;
};