/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    if(!s) return t;
     
    const sArray = s.split('').sort();
    const tArray = t.split('').sort();
   for(let i = 0; i < t.length; i++) {
      if(sArray[i] !== tArray[i]) {
          return tArray[i];
      }
   }
};