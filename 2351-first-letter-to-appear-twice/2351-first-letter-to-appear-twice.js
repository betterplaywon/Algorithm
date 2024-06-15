/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
   const output = {};
    
    for(let i=0; i<s.length; i++) {
        const element = s[i];
        if(output[element]) return element;
        output[element] = element;
};
};