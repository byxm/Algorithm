const { LinkedList } = require("./basicLinkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createLinkedList = (elements) => {
  const linkedList = new LinkedList();
  for (let i = 0; i < elements.length; i++) {
    linkedList.addLast(elements[i]);
  }
  return linkedList;
};

// 思路是每个当前节点的pre指向之前的next，next指向pre
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur != null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

const link = createLinkedList([1, 2, 3, 4, 5]);


