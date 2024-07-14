/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let hash = {};
  let output = '';
  for(const char of alphabet) hash[char] = char;

const replaceChar = (char) => {
    if(hash[char] === char) return char;
    return hash[char] = replaceChar(hash[char]);
}

for(let i=0; i<s2.length; i++) {
    // how to replace each other?
    const charS1 = replaceChar(s1[i]);
    const charS2 = replaceChar(s2[i]);

if(charS1 === charS2) continue;

charS1 < charS2 ? hash[charS2] = charS1 : hash[charS1] = charS2;
}

for(const char of baseStr) output += replaceChar(char);
return output;
};
