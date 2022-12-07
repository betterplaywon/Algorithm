/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // str 요소를 순차적으로 접근한다
    // 순차적으로 접근한 요소의 index를 뽑는다
    // 현재 요소와 다음 요소의 index를 비교한다
    // 중복되는 요소의 [i]와 [j]를 리턴하고, 중복되지 않는다면 "" 를 리턴한다.
    
    let result = "";
    const firstStrs = strs[0];
    
    for(let i=0; i<firstStrs.length; i++) {
        const selectStrs = firstStrs[i];
        for(let j=1; j<strs.length; j++) {
            // 처음부터 중복되어 바로 다음으로 넘어가는게 반복되어 output에 f만 출력.
           // if(strs[j][i] === selectStrs) return result += selectStrs;
             if(strs[j][i] !== selectStrs) return result;
        }
        result += selectStrs;
    }
    return result;
};

strs = ["flower","flow","flight"]