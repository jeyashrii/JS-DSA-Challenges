// PROBLEM STATEMENT:
// GIVEN AN ARRAY arr,RETURN THE SECOND LARGEST DISTINCT ELEMENT FROM THE ARRAY .
// IF THE SECOND LARGET ELEMENT DOESNT EXIST,RETURN -1

// SAMPLE TEST CASES

// INPUT:[12, 35, 1, 10, 34, 1]
// OUTPUT:34
// INPUT:[10,5,10]
// OUTPUT:5
// INPUT:[10,10,10]
// OUTPUT:-1

//----APPROACH 1:SORT IN DESCENDING ORDER RETURN THE FIRST ELEMENT WHICH IS SMALLER THAN THE LARGEST ELEMENT

let arr = [12, 35, 1, 10, 34, 1];

function a(arr) {
  if (arr.length < 2) {
    console.log("An array must have atleast two elements");
  }
  arr.sort((a, b) => b - a);
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < largest) {
      return arr[i];
    }
  }
  return "-1";
}

//console.log(a(arr));
//APPROACH 2:SORT IN ASCENDING ORDER,TRAVERSE FROM REVERSE RETURN THE FIRST ELEMENT WHICH IS NOT EQUAL TO THE LAST ELEMENT
function b(arr) {
  if (arr.length < 2) {
    console.log("An array must have atleast two elements ");
  }

  arr.sort((a, b) => a - b);
  for (let i = arr.length - 2; i >= 0; i--) {
    //if we give i=arr.lenght-1,first i will be the elast element and i+1 will be out of bound(no element),
    //so undefined ,so the last elemenrt(8)is !==undefined so condition becomes true
    //and the largest element will be returned
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
  return "-1";
}
//console.log(b([3, 5, 8, 1]));

//APPROACH 3:WITHOUT SORTING USE TWO ITERATIONS ONE TO FIND THE LARGEST ADN NEXT TO FIND THE SECOND LARGEST
function c(arr) {
  if (arr.length < 2) {
    console.log("An array must have atleast two elements ");
  }
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
//console.log(c([5, 9, 23, 9, 7]));

//APPROACH 4:USING ONE TRAVERSAL,KEEPING TRACK OF THE LARGEST AND SECOND LARGEST

function d(arr) {
  if (arr.length < 2) {
    console.log("An array must have atleast two elements ");
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(d([3, 6, 34, 5, 1, 9, 4, 54]));
