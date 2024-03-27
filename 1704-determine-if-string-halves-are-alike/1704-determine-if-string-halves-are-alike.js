/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    const word1 = s.slice(0,s.length/2).split('');
    const word2 = s.slice(s.length/2, s.length).split('');
    
    const filter1 = word1.filter((num)=> vowelsArr.indexOf(num)>=0);
    const filter2 = word2.filter((num)=> vowelsArr.indexOf(num)>=0);
    
    return filter1.length === filter2.length;
};