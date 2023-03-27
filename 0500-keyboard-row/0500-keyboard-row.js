/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // 중복 없애고 편하게 요소 탐색하기 위해 Set 사용.
    
    const first = new Set("qwertyuiop".split('')); 
    const second = new Set("asdfghjkl".split(''));
    const third = new Set("zxcvbnm".split(''));
    
    let result=[];
    
   for (let word of words) {
   const splitAndLower = word.toLowerCase().split('');
   
   if(splitAndLower.every((v)=> first.has(v))) {
   result.push(word);
   } else if(splitAndLower.every((v)=> second.has(v))) {
   result.push(word);
   } else if(splitAndLower.every((v)=>third.has(v))) {
   result.push(word);
   }
   }
     return result;
};