/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const stack = []

    for (i=0; i < s.length; i++){

        let bracketArr = s[i];

        switch(bracketArr) {
            case '(': stack.push(')');
                // console.log(bracketArr)
                // console.log('stack: ',stack)
                break;
            case '[': stack.push(']');
                // console.log(bracketArr)
                // console.log('stack: ',stack)
                break;
            case '{': stack.push('}')
               // console.log(bracketArr)
               // console.log('stack: ',stack)
                break;
            default:
               const prevStack = stack.pop() // '({)'로 들어왔다면 )가 아닌 {를 의미
               
                if (bracketArr !== prevStack) return false; 
        }
    }
   // return stack;
   return stack.length === 0;
}
    
isValid('({)')