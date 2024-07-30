/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const output = [];
    let count = '';

   for(let i=0; i<=pattern.length; i++) {
    output.push(i+1);
        
    if(i === pattern.length || pattern[i] === 'I') {
        while(output.length > 0) {
            count+=output.pop();
        }
    } 
   }
   return count;
};