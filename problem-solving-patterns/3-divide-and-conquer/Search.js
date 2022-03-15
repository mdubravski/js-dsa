/**
 * Given a sorted array of integers, write a function called search that
 * accepts a value and returns the index where the value passed is located.
 * If the value is not found return -1.
 * 
 * ex.
 * search([1,2,3,4,5] ,3) => 2
 * search([1,2,3,4,5] ,7) => -1
 * search([1,2,3,4,5] ,5) => 4
 */

let foo = (arr, val) => {

};

/**
 * time => O(n)
 * space => O(1)
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

/**
 * time => O(log(n))
 * space => O(n)
 */
function binSearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  let mid;
  let cur;

  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    cur = arr[mid];
    if (cur < val) {
      min = mid + 1;
    } else if (cur > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binSearch([1, 2, 3, 4, 5], 4));
console.log(binSearch([1, 2, 3, 4, 5], 11));
console.log(binSearch([1, 2, 3, 4, 5], 3));

console.log(foo([1, 2, 3, 4, 5], 4));
console.log(foo([1, 2, 3, 4, 5], 11));
console.log(foo([1, 2, 3, 4, 5], 3));