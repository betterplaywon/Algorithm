/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const isSymmetric = (num) => {
    const str = String(num);
    const length = str.length;
    
    if(length === 1) return 0;
    
    let leftNum = 0, rightNum = 0;
    
    for(let i=0; i<length/2; ++i) {
        leftNum += (+str[i]);
        rightNum += (+str[length/2+i]);
    }
    return leftNum === rightNum ? 1 : 0;
}

var countSymmetricIntegers = function(low, high) {
    let count = 0;
    
    for(let i=low; i<=high; ++i) {
        count += isSymmetric(i);
    }
    return count;
};