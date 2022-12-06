/**
 * @param {string} s
 * @return {number}
 */

// 숫자가 크거나 같을 땐 누적합산
// 만약 다음 수가 없다면 현재의 숫자만


 const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

const romanToInt = function(s) {

let convertRomanInteger = 0;

   if(!s) {
       return null;
   }

for(let i = 0; i < s.length; i++) {
   const num = romanObj[s[i]];
   const nextNum = romanObj[s[i+1]];

    if(num >= nextNum) {
        convertRomanInteger += num;
    } else {
        if(!nextNum) return convertRomanInteger + num;
            // num < nextNum
            convertRomanInteger -= num;
            }
        }
    return convertRomanInteger;
    }
