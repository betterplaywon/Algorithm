/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

  // 첫 시도 : const result = BigInt(a).toString(2) + BigInt(b).toString(2);
// stackoverflow 질문 중 BigInt에 0b를 추가해줌으로서 원하는 결과값을 얻을 수 있었다는 내용 참조

var addBinary = function(a, b) {
     const aBigInt = `0b${a}`
  const bBigInt = `0b${b}`
  const result = BigInt(aBigInt) + BigInt(bBigInt)
  return result.toString(2)
};