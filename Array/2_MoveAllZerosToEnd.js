// Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

// Input: arr[] = [10, 20, 30]
// Output: arr[] = [10, 20, 30]
// Explanation: No change in array as there are no 0s.

// Input: arr[] = [0, 0]
// Output: arr[] = [0, 0]
// Explanation: No change in array as there are all 0s.

//APPROACH 1:CREATE A TEMP ARRAY OF SAME SIZE ,PUSH ALL THE NON-ZERO ELEMENTS FIRST THEN FILL THE REST SPACE WITH ZEROS
function a(arr) {
  let n = arr.length;
  let temp = new Array(n);
  // to keep track of the index in temp[]
  let j = 0;
  // Copy non-zero elements to temp[]
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp[j++] = arr[i];
    }
  }
  // Fill remaining positions in temp[] with zeros
  while (j < n) temp[j++] = 0;
  // Copy all the elements from temp[] to arr[]
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  return arr;
}
console.log(a([1, 0, 3, 4, 0, 6, 0, 9]));

//APPROACH 2:Two Traversals - O(n) Time and O(1) Space
// The idea is to move all the zeros by traversing the array twice.
// First Traversal: Shift non-zero elements
//Second Traversal: Fill remaining positions with zeros
function b(arr) {
  let count = 0;

  // If the element is non-zero, replace the element at
  // index 'count' with this element and increment count
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  // Now all non-zero elements have been shifted to
  // the front. Make all elements 0 from count to end.
  while (count < arr.length) arr[count++] = 0;
  return arr;
}
console.log(b([1, 0, 3, 4, 0, 6, 0, 9]));

//APPROACH 2:One Traversal - O(n) Time and O(1) Space
// The idea is similar to the previous approach where we took a pointer, say count to track where the next non-zero element
//  should be placed. However, on encountering a non-zero element, instead of directly placing the non-zero element at arr[count], we will swap the non-zero element with arr[count]. This will ensure that if there is any zero present at arr[count],
// it is pushed towards the end of array and is not overwritten.
function c(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  return arr;
}
console.log(c([1, 0, 3, 4, 0, 6, 0, 9]));
