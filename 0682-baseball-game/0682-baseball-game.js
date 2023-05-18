/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const ops = operations;
    let arr = [];
    
    for(let i=0; i<ops.length; i++) {
        // 문자일 때만 if문으로, 나머지는 숫자일 테니 빈 배열에 push.
        if(ops[i] === 'C') {
           arr.pop();
        } else if(ops[i] === 'D') {
           arr.push(arr[arr.length-1]*2);
        } else if(ops[i] === '+') {
            arr.push(arr[arr.length-1]+ arr[arr.length-2]);
        } else {
            // string type -> number type 변환이 필요. JS의 암묵적 형변환 사용.
            arr.push(+ops[i]);
        }   
    }
    // 완성된 배열을 모두 합산하기 위한 reduce() 사용.
    const sum = arr.reduce((acc,curr) => acc+curr,0);
    return sum;
};