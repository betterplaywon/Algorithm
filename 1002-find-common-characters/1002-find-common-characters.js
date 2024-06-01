/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const output = [];
    
    const firstWord = words[0].split('');
   
    for(const char of firstWord) {
       const hasChar = words.every((word)=> word.includes(char));
        if(hasChar) {
            output.push(char);
           words = words.map((word) => word.replace(char,''));
        }
    }
    return output;
};