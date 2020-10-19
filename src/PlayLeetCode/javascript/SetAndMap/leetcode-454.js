/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const twoSumMap = new Map();
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const curTwoSum = A[i] + B[j];
      if (twoSumMap.has(curTwoSum)) {
        twoSumMap.set(curTwoSum, twoSumMap.get(curTwoSum) + 1);
      } else {
        twoSumMap.set(curTwoSum, 1);
      }
    }
  }

  let res = 0;

  for (let k = 0; k < C.length; k++) {
    for (let L = 0; L < D.length; L++) {
      const secTwoSum = C[k] + D[L];
      if (twoSumMap.has(0 - secTwoSum)) {
          res += twoSumMap.get(0 - secTwoSum)
      }
    }
  }
  return res;
};


console.log('fourSumCount', fourSumCount([ -1, -1],[-1,1],[-1, 1],[ 1, -1]));
