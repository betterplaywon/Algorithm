/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    
    const obj = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26,
    }
    
if (columnTitle.length > 1) {
    // 2

    let count = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      for (key in obj) {
        if (String(key) === columnTitle[i]) {
          if (count === 0) {
            count += obj[key] * 26;
          } else if (columnTitle.length - 1 == i) {
            count += obj[key];
          } else {
            count = (count + obj[key]) * 26;
          }
        }
      }
    }
    return count;
  } else {
    for (key in obj) {
      if (columnTitle[0] === String(key)) {
        return obj[key];
      }
    }
  }
    
    
};