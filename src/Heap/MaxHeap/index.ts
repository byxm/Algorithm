import SortHelper from "../../Sort-Basic/Selection-Sort/sortTestHelper";

/**
 * @description 构造最大堆，还是使用数组实现满二叉树。满二叉树起始索引从1开始，
 * 左子树节点索引为根节点索引的2倍，右子树节点为根节点索引的2倍加1
 * 如果根节点索引从0开始，则左子节点为2*i + 1, 又子节点为2*i + 2
 */
class MaxHeap<T extends number> {
  heapData: Array<T>;
  constructor() {
    this.heapData = new Array<T>();
  }

  insert(el: T) {
    this.heapData.push(el);
    this.shiftUp(this.heapData.length - 1);
  }

  /**
   * 使用添加的元素和他的父节点的元素判断如果比他大就和父节点元素交换位置,注意JS的除法是带小数的
   */
  shiftUp(newElementIndex: number): void {
    while (
      this.heapData.length > 1 &&
      this.heapData[newElementIndex] >
        this.heapData[Math.floor((newElementIndex - 1) / 2)]
    ) {
      const parentIndex = Math.floor((newElementIndex - 1) / 2);
      [this.heapData[parentIndex], this.heapData[newElementIndex]] = [
        this.heapData[newElementIndex],
        this.heapData[parentIndex],
      ];
      newElementIndex = Math.floor((newElementIndex - 1) / 2);
    }
  }

  /**
   * 取出堆中最大的元素，将根节点的元素取出，然后将最后一个元素放置到根节点位置，再依次调整根节点元素的位置
   */
  extractMax(): T {
    const ret = this.heapData[0];
    this.heapData[0] = this.heapData[this.heapData.length - 1];
    // this.size--;
    this.heapData.pop(); // 将最后一个元素移动到首位后就不用考虑它了

    this.shiftDown(0);

    return ret;
  }

  /**
   * 使用根元素进行shiftDown操作，用根元素和左右两个子节点元素中最大的那个值相比较，如果小于它就交换位置，依次往下不断比较
   * 当这个元素比左右子节点都大或者下沉到没有左右子节点，这个过程结束
   */
  shiftDown(initIndex: number): void {
    // const leftChildIndex = this.getLeftChildIndex(initIndex);
    // const rightChildIndex = this.getRightChildIndex(initIndex);
    // const maxBetweenLeftChildAndRightChild = Math.max(
    //   this.heapData[leftChildIndex],
    //   this.heapData[rightChildIndex]
    // );  这里用两个索引，并且比较左右节点的大小就绕进去了，这样写下去会变得复杂,应该遵照规律，使用一个索引来代替

    // shiftDown终止条件1：当shiftDown左节点索引大于堆的长度说明越界
    while (this.getLeftChildIndex(initIndex) <= this.heapData.length) {
      let dynamicLeftOrRightChild = this.getLeftChildIndex(initIndex);
      if (
        this.heapData[dynamicLeftOrRightChild + 1] >
        this.heapData[dynamicLeftOrRightChild]
      ) {
        dynamicLeftOrRightChild += 1;
      }

      if (this.heapData[initIndex] > this.heapData[dynamicLeftOrRightChild])
        break;

      [this.heapData[initIndex], this.heapData[dynamicLeftOrRightChild]] = [
        this.heapData[dynamicLeftOrRightChild],
        this.heapData[initIndex],
      ];
      initIndex = dynamicLeftOrRightChild;
    }
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  getSize() {
    return this.heapData.length;
  }

  isEmpty() {
    return this.heapData.length === 0;
  }
}

// const maxHeap: MaxHeap<number> = new MaxHeap();
// const arr = SortHelper.generateRandomArray(50, 0, 100);

// for (let i = 0; i < arr.length; i++) {
//   maxHeap.insert(arr[i]);
// }
// console.log(maxHeap.heapData);

export default MaxHeap;
