/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isDividingNum = (num) => {
    const dividing = String(num).split('');
    return dividing.every((item)=> num % Number(item) === 0);
} 

var selfDividingNumbers = function(left, right) {
    
    const output = [];
    
    for(let i = left; i<=right; i++) {
        if(isDividingNum(i)) {
            output.push(i);
        }
    }
    return output;
};