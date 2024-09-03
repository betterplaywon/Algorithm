/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const ONLY_NUMBER = /\d+/g;
    const ONLY_STRING = /[a-z]+/g;

    let numArr = [];
    let strArr = [];
    for(const char of s) {
        if(char.match(ONLY_NUMBER)) {
            numArr.push(char);
        } else if(char.match(ONLY_STRING)) {
            strArr.push(char);
        }
    }

    if(Math.abs(numArr.length - strArr.length) > 1) return '';

    const output = [];
    const length = Math.max(numArr.length, strArr.length);
    const [firstArr,secondArr] = numArr.length > strArr.length ? [ numArr,strArr] : [strArr, numArr];
  
    for(let i=0; i<length; i++) {
         if(i<firstArr.length) {
            output.push(firstArr[i]);
        }
        if(i<secondArr.length) {
            output.push(secondArr[i]);
        }
    }
    return output.join('');
};
