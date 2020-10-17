/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 
var isIsomorphic = function (s, t) {
   const originStrMap = new Map();
   const alreadyAdd = new Map();
   for(let i = 0; i < s.length; i++) {
        const currentStr = s[i];
        const targetStr = t[i];
        if(!originStrMap.has(currentStr)) {
           if(alreadyAdd.has(targetStr)) {
                return false;
           }
           originStrMap.set(currentStr, targetStr);
           alreadyAdd.set(targetStr, 1)
        }else {
            if(originStrMap.get(currentStr) !== targetStr) {
                return false;
            }
        }
   }
   return true;
};

console.log(isIsomorphic('foe','baa'));

