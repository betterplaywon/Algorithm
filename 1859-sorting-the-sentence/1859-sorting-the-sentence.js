/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const split = s.split(' ');
    const newArr = new Array();
    
    for(let i=0; i<split.length; i++) {
        const element = split[i];
        const index = element[element.length-1];
        const word = element.slice(0,element.length-1);
       
       newArr[index-1] = word;
    }
   return newArr.join(' ');
};