/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstNum = '';
    let secondNum = '';
    let targetNum = '';
    
    for(const letter of firstWord) {
       firstNum += letter.charCodeAt(0) - 97;
    }
    
    for(const letter of secondWord) {
        secondNum += letter.charCodeAt(0) - 97;
    }
    
     for(const letter of targetWord) {
        targetNum += letter.charCodeAt(0) - 97;
    }
    
    return (Number(firstNum) + Number(secondNum)) === Number(targetNum);
};