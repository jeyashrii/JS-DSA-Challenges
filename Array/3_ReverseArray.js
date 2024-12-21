// Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

// Examples:

// Input: arr[] = {1, 4, 3, 2, 6, 5}
// Output: {5, 6, 2, 3, 4, 1}
// Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

// Input: arr[] = {4, 5, 1, 2}
// Output: {2, 1, 5, 4}
// Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.

//APPROACH 1:CREATE A TEMP ARRAY OF SAME SIZE,
//FILL THE TEMP ARRAY WITH ORIGINAL ARRAY IN REVERSE ORDER
//copy the temp arrr into original array

function a(arr) {
  let n = arr.length;
  let temp = new Array(a);
  for (let i = 0; i < n; i++) {
    temp[i] = arr[n - i - 1];
  }
  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
}
let array = [1, 2, 3, 4, 5];
a(array);
console.log(array);

//APPROACH 2:ITERATE OVER THE FIRST HALF OF THE ARRAY AND SWAP THE
//ELEMENT WITH ITS RESPECTIVE LASST ELEMENT FROM THE END

function b(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  }
}
let array1 = [0, 1, 2, 3, 4];
b(array1);
console.log(array1);

//APPROACH 3:MAINTAIN TWO POINTERS LEFT AND RIGHT POINTING TO THE FIRST AND LAST ELEMENT
//WHLIE LEFT<RIGHT SWAP THESE TWO ELEMENTS
//tHEN INC LEFT BY 1 AND DEC RIGHT BY 2

function c(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
let array3 = [9, 8, 7, 6, 5, 4];
c(array3);
console.log(array3);
//APPROACH 4:
// The idea is to use recursion and define a recursive function
//  that takes a range of array elements as input and reverses it. Inside the recursive function,

// Swap the first and last element.
// Recursively call the function with the remaining subarray.

function recursiveReverse(arr, l, r) {
  if (l >= r) return;
  [arr[l], arr[r]] = [arr[r], arr[l]];
  recursiveReverse(arr, l + 1, r - 1);
}
function reverseArray(arr) {
  let n = arr.length;
  recursiveReverse(arr, 0, n - 1);
}

let array4 = [1, 2, 3];
reverseArray(array4);
console.log(array4);
