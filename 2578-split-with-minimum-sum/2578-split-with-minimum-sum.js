/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    
    
    const arr = String(num).split('').map((str) => +str).sort((a,b)=> a-b);
    let odd = '';
    let even = '';
    
    for(let i=0; i<arr.length; i++) {
        const singleNum = arr[i];
        i % 2 === 0 ? even+=singleNum : odd+=singleNum;
    }
    return Number(odd) + Number(even);
};