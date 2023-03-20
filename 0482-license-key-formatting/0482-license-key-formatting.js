/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
let newString ='';
const a = s.split('-').join('').toUpperCase();
let dashPosition = a.length-k;

for(let i=a.length-1; i>=0; i--) {
	newString+=a[i];
  
     // i가 dashPosition과 같다는 조건만 줄 시에는 대시가 앞까지 붙는다.
      // ex) "W9E2-Z3F5-"를 뒤집게 되면 맨 앞에 대시가 붙는다.
      // 그렇기에 i가 0이 아니라는 조건이 필요하다.
  if(i === dashPosition && i !== 0) {
  newString+= '-';
  dashPosition-=k;
  }
}

const result = newString.split('').reverse().join('');
return result;

};