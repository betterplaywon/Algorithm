/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const a = start^goal;
    const b = a.toString(2);
    const c = b.split('').filter((number)=> number === '1').length;
    
    return c;
};