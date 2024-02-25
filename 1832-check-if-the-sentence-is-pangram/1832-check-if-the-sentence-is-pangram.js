/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabetArr = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    
    for(let i=0; i<sentence.length; i++) {
        const alphabet = sentence[i];
       if(alphabetArr.includes(alphabet)) {
           const searchAlphabet = alphabetArr.indexOf(alphabet);
           alphabetArr.splice(searchAlphabet,1);
       }
    }
    return alphabetArr.length === 0;
};