/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 배열로 만들고, 배열의 요소 중 겹치는 idx가 없다면 해당 idx를 뱉고, 없다면 -1 리턴.
    for(let i =0; i < s.length; i++) {
        const coincideString = s.indexOf(s[i]) === s.lastIndexOf(s[i]);
        if(coincideString) {
            return i;
        }
    }
    return -1;
};