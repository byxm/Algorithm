/**
 * @description leetcode第125题，对撞指针判断回文字符串
 */

/**
 * 此解法显得有些繁琐，因为字符串数据里面有除了字母数字的干扰字符,另外写了两个方法来判断字母数字
*/
var isPalindrome = function (s) {
  let left = 0; // 定义左指针
  let right = s.length - 1; // 定义右指针

  while (left <= right) {
    // 非数字和字母对撞指针向前向后移动
    if (disguardNumber(s[left]) && !disguardCharacotro(s[left])) {
      left++;
      continue;
    }

    if (disguardNumber(s[right]) && !disguardCharacotro(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

var disguardNumber = (ele) => isNaN(parseInt(ele));

var disguardCharacotro = (ele) => /^[a-zA-Z]*$/.test(ele);


/**
 * 优化解法可以现将字符串中的非字母和数字删除掉在做判断
*/