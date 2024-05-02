/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let commonNumArr = [];
    
    for(let i=0; i < arr2.length; i++) {
        const commonNum = arr1.filter((num1) => num1 === arr2[i]);
        const unCommonNum = arr1.filter((j) => j !== arr2[i]);
        
        commonNumArr = commonNumArr.concat(commonNum);
        arr1 = unCommonNum;
    }
    
    const sortingUnCommonNum = arr1.sort((a,b)=> a-b);
    return commonNumArr.concat(sortingUnCommonNum);
};