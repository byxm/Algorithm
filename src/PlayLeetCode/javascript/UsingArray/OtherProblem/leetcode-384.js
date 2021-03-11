/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.originArr = [...nums];
  this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.originArr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.arr.length;
  for (let i = 0; i < len; i++) {
    const index = this.randomInt(i, len);
    this.swap(i, index);
  }
  return this.arr;
};

Solution.prototype.swap = function (l, r) {
  [this.arr[l], this.arr[r]] = [this.arr[r], this.arr[l]];
};

Solution.prototype.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

 const sl = new Solution([1, 2, 3])

 console.log(sl.shuffle());
 console.log(sl.reset());

