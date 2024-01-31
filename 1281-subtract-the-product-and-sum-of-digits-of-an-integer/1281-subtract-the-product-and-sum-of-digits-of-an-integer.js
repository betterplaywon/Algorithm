/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numsArr = String(n).split('');
    let product=1;
    let sum=0; 
    
    for(let element of numsArr) {
        const changeNum = Number(element);
        console.log(changeNum)
        product*=changeNum;
        sum+=changeNum;
    }
    return product - sum;
};