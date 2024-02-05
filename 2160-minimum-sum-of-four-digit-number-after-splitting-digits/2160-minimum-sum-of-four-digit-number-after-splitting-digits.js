/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const asc = String(num).split('').sort((a,b)=> a-b);
    const new1= Number(asc[0]+asc[2]);
    const new2 = Number(asc[1]+asc[3]);
    
    return new1+new2;
};