/**
 * Write a function called productOfArray, which takes in an array of numbers and
 * returns the product of them all.
 * 
 * productOfArray([1,2,3]), 6
 */

function productOfArray(arr){
  // recursive case
  if(arr.length === 0) return 1;
  // base case
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3]));