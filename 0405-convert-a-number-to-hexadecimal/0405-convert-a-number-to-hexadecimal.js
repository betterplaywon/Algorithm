/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    // 16진수에서 존재하는 숫자는 '0123456789abcdef'로 총 16개
    // two's complement는 2의 보수를 의미. 음수라면 4294967296에서 - 숫자를 해주면 된다.
     
    num = num >= 0 ? num : 4294967296 + num
    let obj = {
        '10': 'a',
        '11': 'b',
        '12': 'c',
        '13': 'd',
        '14': 'e',
        '15': 'f'
    }
    let result = ""
    while(num > 0){
        result = (obj[num%16] || num%16) + result
        num = Math.floor(num/16)
    }
    return result || "0"
};