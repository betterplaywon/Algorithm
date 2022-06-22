/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
  /* const obj = [I, V, X, L, C, D, M]; */
 /*  객체로 만들어 접근해본다. 예를들면  const obj = {I: 1} 이런 식으로 */
 
 const romanNumObj = {'I':1,
               'V':5,
               'X': 10,
               'L': 50,
               'C': 100,
               'D': 500,
               'M': 1000
               };

// console.log('object content check : ',romanNumObj['I']);
// console.log('object content check : ',romanNumObj.I);
// 생각할 수 있는 경우의 수: 숫자가 여러개일 때, 숫자가 하나일 떄.
let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const num = romanNumObj[s[i]];
        const nextNum = romanNumObj[s[i + 1]];
        
        if (nextNum && num >= nextNum) {
            result += num;
        } else {
            if (!nextNum) return result + num;
        
            result -= num;
        }
    }
    return result;
};
