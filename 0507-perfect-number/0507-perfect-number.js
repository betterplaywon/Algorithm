/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let result = 0;
    const range = Math.floor(num / 2);
    
    for(let i = 1; i <= range; i++) {
        if(num % i === 0) {
            result += i;
        }
    }
    return result === num;
};