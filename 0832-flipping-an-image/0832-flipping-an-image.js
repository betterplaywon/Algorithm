/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for(const ele of image) {
       ele.reverse();
    }
    
    for(let i=0; i<image.length; i++) {
       for(let j=0; j<image.length; j++) {
          image[i][j] = image[i][j] === 0 ? 1 : 0;
       }
    }
    
    return image;
};