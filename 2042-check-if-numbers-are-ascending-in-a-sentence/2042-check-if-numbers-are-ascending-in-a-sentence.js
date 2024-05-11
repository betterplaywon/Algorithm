/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const extractionNum = s.split(' ').map((item)=> Number(item)).filter((num)=> !isNaN(num));
    
    for(let i=1; i<extractionNum.length; i++) {
        if(extractionNum[i] <= extractionNum[i-1]) {
            return false;
        }
    }
    return true;
};