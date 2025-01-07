// Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times.
// Note: The returned array of majority elements should be sorted.

// Examples:

// Input: arr[] = {2, 2, 3, 1, 3, 2, 1, 1}
// Output: {1, 2}
// Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).

// Input: arr[] = {-5, 3, -5}
// Output: {-5}
// Explanation: The frequency of -5 is 2, which is more than floor n/3 (3/3 = 1).

// Input: arr[] = {3, 2, 2, 4, 1, 4}
// Output: { }
// Explanation: There is no majority element.

// APPROACH 1:iterate over all elements and count the frequency of the element in the array.
// If the frequency of the element is greater than floor(n/3), add it to the result.
// To avoid adding duplicate elements into the result, we can check if the element is already present in the result.
// We can stop the iteration if we have already found two majority elements.

function a(arr) {
  let n = arr.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i; j < n; j++) {
      if (arr[i] === arr[j]) count = count + 1;
    }
    if (count > n / 3) {
      if (result.length === 0 || result[0] !== arr[i]) {
        result.push(arr[i]);
      }
    }
    if (result.length === 2) {
      if (result[0] > result[1]) {
        [result[0], result[1]] = [result[1], result[0]];
      }
      break;
    }
  }

  return result;
}
console.log(a([3, 2, 2, 4, 1, 4]));

// APPROACH 2:use a hash map or dictionary to count the frequency of each element in the array.
//  After counting, iterate over the hash map and if the frequency of any element is greater than (n/3), push it into the result.
//  Finally, the majority elements are returned after sorting.

function b(arr) {
  let n = arr.length;
  let map = {};
  let result = [];

  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  for (const key in map) {
    const ele = Number(key);
    const count = map[key];
    if (count > Math.floor(n / 3)) {
      result.push(ele);
    }
  }
  if (result === 2) {
    if (result[0] > result[1]) {
      [result[0], result[1]] = [result[1], result[0]];
    }
  }
  return result;
}

console.log(b([2, 2, 3, 1, 3, 2, 1, 1]));
