// Given an array arr[] of size n, the task is to print the lexicographically next greater permutation of the given array. If there does not exist any greater permutation, then find the lexicographically smallest permutation of the given array.

// Let us understand the problem better by writing all permutations of [1, 2, 4] in lexicographical order

// [1, 2, 4], [1, 4, 2], [2, 1, 4], [2, 4, 1], [4, 1, 2] and [4, 2, 1]

// If we give any of the above (except the last) as input, we need to find the next one in sequence. If we give last as input, we need to return the first one.

// Examples:

// Input: arr = [2, 4, 1, 7, 5, 0]
// Output: [2, 4, 5, 0, 1, 7]
// Explanation: The next permutation of the given array is 2 4 5 0 1 7

// Input: arr = {3, 2, 1]
// Output: [1, 2, 3]
// Explanation: As arr[] is the last permutation. So, the next permutation is the lowest one.
function nextPermutation(arr) {
  let n = arr.length;
  let pivot = -1;
  //find the pivot inddex
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivot = i;
      break;
    }
  }
  //if pivot does not exist reverse the whole array
  if (pivot === -1) {
    arr.reverse();
    return arr;
  }
  //find the element from right that is greater than pivot
  for (let i = n - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
      break;
    }
  }
  //reverse the elements from pivot +1 to the end to get the next permutation
  let left = pivot + 1;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(nextPermutation([3, 2, 1]));
