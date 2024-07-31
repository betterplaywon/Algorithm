/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    // 특정 키워드가 주어진 배열 내의 단어에 존재하는 것을 고르는 것
const output = [];

for(let i=0; i<words.length; i++) {
    const shift = words[i];
    for(let j=0; j<words.length; j++) {
        if(i !== j && words[j].indexOf(shift) >= 0) {
            output.push(shift);
            break;
        }
    }
}
return output;
};