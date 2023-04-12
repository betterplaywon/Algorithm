/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let result =[];
    const flatMat = mat.flat();
    
    if(flatMat.length !== r*c) return mat;
    // result.push(flatMat); 요소를 개별로 배열에 넣어 리턴해야해서 해당 코드 deprecated
    
    for(let i=0; i<flatMat.length;i=i+c){
      const splitFlatMat = flatMat.slice(i,i+c);
        result.push(splitFlatMat);
    }
    
    return result;  
};