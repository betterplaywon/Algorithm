/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    const arr = [];
    
    for(let i=0; i<num.length-2; i++){
        if(num[i]===num[i+1] && num[i]===num[i+2]) {
            arr.push(num[i]);
        } 
    }
    
    if(arr.length === 0) return "";
    
    const maxNum = String(Math.max(...arr));
    return maxNum+maxNum+maxNum;
};