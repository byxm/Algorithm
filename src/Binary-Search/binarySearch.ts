class BinarySearch<T> {
  constructor() {}

  /**
   * 二分查找法，针对一个有序的数组，从中间对数组进行划分,分别从左右两边查找元素相应的位置，直到找到为止
   */
  search(arr: Array<T>, target: T): number {
    // 针对元素为止从[l....r];
    let l = 0;
    let r = arr.length - 1;

    // 二分到最后一个元素已经不能再划分左右子数组的时候二分终止
    while (l <= r) {
      // let mid = Math.floor((l + r) / 2);
      let mid = Math.floor(l + (r - l) / 2);
      if (arr[mid] === target) {
        return mid;
      }

      /**
       * 如果已经确定了中间元素不是查找的元素，再分别改变左右索引的话就需要忽略mid的索引，相应的加一位和减一位
       * */
      if (target > arr[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  searchRecursive(arr: Array<T>, target: T, l: number, r: number) {
    let mid = Math.floor(l + (r - l) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
    const res = this.searchRecursive(arr, target, l, r);
    return res;
  }
}

export default BinarySearch;
