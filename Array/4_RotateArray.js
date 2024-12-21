// Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.

// Examples:

// Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
// Output: {3, 4, 5, 6, 1, 2}
// Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}

// Input: arr[] = {1, 2, 3}, d = 4
// Output: {2, 3, 1}
// Explanation: The array is rotated as follows:

// After first left rotation, arr[] = {2, 3, 1}
// After second left rotation, arr[] = {3, 1, 2}
// After third left rotation, arr[] = {1, 2, 3}
// After fourth left rotation, arr[] = {2, 3, 1}

function a(arr, d) {
  let n = arr.length;
  for (let i = 0; i < d; i++) {
    let first = arr[0];
    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[n - 1] = first;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(a(arr, 2));
