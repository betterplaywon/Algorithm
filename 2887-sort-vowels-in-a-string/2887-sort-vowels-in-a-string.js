/**
 * @param {string} s
 * @return {string}
 */

const isVowel = (char) => {
    const vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

var sortVowels = function(s) {
    const vowels = "aeiouAEIOU";
    let strArr = s.split('').filter((letter)=> vowels.includes(letter)).sort();
    let output = '', idx = 0;
    
   for(let i=0; i<s.length; i++) {
       if(isVowel(s[i])) {
           output += strArr[idx];
           idx++;
       } else {
           output += s[i];
       }
   }
    return output;
};