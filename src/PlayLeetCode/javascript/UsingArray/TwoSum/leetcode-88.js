function mergeTwoArray(nums1, m, nums2, n) {
  let l = m - 1,
    r = n - 1,
    p = m + n - 1; 

  while (l >= 0 && r >= 0) {
    console.log("l, r", l, r);
    if (nums2[r] > nums1[l]) {
      nums1[p] = nums2[r];
      r--;
      p--;
    }
    if (nums2[r] < nums1[l]) {
      nums1[p] = nums1[l];
    //   p--;
    //   nums1[p] = nums1[l];
      l--
      p--
    }
    if (nums2[r] === nums1[l]) {
      nums1[p] = nums1[l];
      p--;
      nums1[p] = nums2[r];
      p--;
      l--;
      r--;
    }
  }
  return nums1;
}

console.log(mergeTwoArray([4,5,6,0,0,0], 3, [1,2,3], 3));
