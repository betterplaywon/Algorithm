/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(a!==0) {
        if(a>0) {
            b++;
            a--;
        } else {
            a++;
            b--;
        }
    }
    return b;
};