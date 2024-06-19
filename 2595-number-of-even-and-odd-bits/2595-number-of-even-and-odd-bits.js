/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let odd = 0;
    let even = 0;
    
    const binaryNumArray = n.toString(2).split('').reverse().map((num)=> +num);
    
    binaryNumArray.forEach((num,index)=> {
        if(num === 1 && index % 2 === 0) {
            even+=1;
        } else if(num === 1 && index % 2 === 1){
            odd+=1;
        }
    })
    return [even, odd];
};