const Stack = require("./basicStack").default;

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = new Stack();
  this.tmp = new Stack();

  this.generalStack(nestedList);
  while (!this.tmp.isEmpty()) {
    const topEle = this.tmp.pop();
    this.stack.push(topEle);
  }
  return {
      hasNext: this.hasNext,
      next: this.next,
      stack: this.stack,
      tmp: this.tmp
  };
};

NestedIterator.prototype.generalStack = function (list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].isInteger()) {
      this.tmp.push(list[i].getInteger());
    } else {
      this.generalStack(list[i].getList());
    }
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return !this.stack.isEmpty();
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.stack.pop()
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */