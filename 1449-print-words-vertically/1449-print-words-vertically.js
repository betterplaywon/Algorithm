/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    const wordList = s.split(' ');
    const maxLength = Math.max(...wordList.map((word)=> word.length));
     const output = [];

    for(let i=0; i<maxLength; i++) {
        let newWord='';
        for(let j=0; j<wordList.length; j++) {
            wordList[j][i] ? newWord+=wordList[j][i] : newWord+=" ";
        }
        output.push(newWord.trimEnd());
    }
    return output;
};