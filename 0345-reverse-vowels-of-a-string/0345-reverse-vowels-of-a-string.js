/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let result = [];
    
    for(let i = 0; i < s.length; i++){
     const searchVowels = vowels.includes(s[i]);
        if(searchVowels){
        result.push(s[i]);
            }
    }
    // map 안의 res는 'h','e','l','l','o'. 현재 result에는 'e'와 'o' 존재.
    return s.split('').map(m => vowels.includes(m) ? (m = result.pop()) : m).join('')
    
};