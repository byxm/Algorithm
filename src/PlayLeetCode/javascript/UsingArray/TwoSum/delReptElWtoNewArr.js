// 祛除数组的重复元素不产生新的元素
function deleteRepeatElement(arr) {
  let len = 1;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[len] = arr[i];
      len++;
    }
  }
  arr.splice(len);
  return arr;
}


const res = deleteRepeatElement([1,4,5,67,4,5,11,34,67,12,90,7])

console.log('res', res);
