/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 인자로 들어온 배열의 마지막 요소에 1을 더한다.
// 만약 배열의 마지막 요소가 9라면 마지막 요소를 0으로 만들고
// 0 앞의 요소를 1로 만들어 처리를 해주도록 하겠다.
// 순서는 역순으로 진행. at()을 활용해볼까 했지만
// 9가 연속해서 나올 수 있는 가능성이 있어 반복문 시행.

var plusOne = function(digits) {
for(let i = digits.length - 1; i >= 0; i--) {
  if(digits[i] === 9) digits[i] = 0;
     else {
         digits[i]++;
         return digits;
     }
}
  digits.unshift(1);
    return digits;
};

plusOne([1,2,3]);
