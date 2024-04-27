/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    if(s.length <= k) return s;
    const a = [];
    let char = ''
    
        for(let i=0; i<s.length; i+=k) {        
            const b = s.split('').splice(i,k).map(num => Number(num));
            const c = b.reduce((acc, cur)=> acc+cur,0);
            char+=c.toString();
        }
    if(char.length > k) {
       return digitSum(char,k);
    } else {
       return char;
    }
}
  