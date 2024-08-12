/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
   let count=0, lines=1, lowerCase='';

   for(let i=97; i<=122; i++) {
    lowerCase+=String.fromCharCode(i);
   }

for(let i=0; i<s.length; i++) {
    const charIndex = lowerCase.indexOf(s[i]);
    const pixel = count+widths[charIndex];
    if(pixel > 100) {
        count = 0;
        lines+=1;
    }
    count+=widths[charIndex];
}
return [lines, count];
};