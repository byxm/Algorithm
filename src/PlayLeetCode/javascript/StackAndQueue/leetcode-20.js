const Stack = require("./basicStack").default;
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const sLetter = s.split('');
    const StackDemo = new Stack();
    const letterMap = { "(": ")", "{": "}", "[": "]" };
    for (const word of sLetter) {
      if (word === "(" || word === "{" || word === "[") {
        StackDemo.push(word);
      } else if (word === ")" || word === "}" || word === "]") {
        const peerWord = StackDemo.peek();
        if(letterMap[peerWord] !== word) {
            return false;
        }
        StackDemo.pop();
      }
    }
    if(!StackDemo.isEmpty()) {
        return false;
    }
    return true;
};


console.log('validLetter', isValid(""));