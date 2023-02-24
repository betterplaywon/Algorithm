/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    
    for(let i=0; i<=n; i++) {
       const num = i.toString(2);
       let val = 0;
        for(let j=0; j<num.length; j++){
            val += Number(num[j]);
        }
    result.push(val);
    }
    return result;
};