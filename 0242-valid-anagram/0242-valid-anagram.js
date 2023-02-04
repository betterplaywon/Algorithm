/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // s와 t의 String을 분해해 includes()나 indexOf로 풀이하면 될 듯.
    if(s.length !== t.length) return false;

    for(let i=0; i < s.length; i++){
        if(t.includes(s[i])){
            //"aacc", "ccac" 인 경우에는 includes로 구분 불가. 요소 삭제로 비교?
         t = t.replace(s[i],'');
        } else {
            return false;
        }
    }
    return true;
};