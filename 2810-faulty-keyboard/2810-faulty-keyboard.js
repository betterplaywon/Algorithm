/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    s.split('');
    const output = [];
    
   for(const alphabet of s){
        alphabet === 'i' ? output.reverse() : output.push(alphabet);
   }
   return output.join('');
};