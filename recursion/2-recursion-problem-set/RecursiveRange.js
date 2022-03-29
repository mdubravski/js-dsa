/**
 * Write a function called recursiveRange which accepts a number and adds
 * up all the numbers from 0 to the number passed to the function.
 * 
 * recursiveRange(4), 10
 */

function recursiveRange(x){
  // base case
  if(x === 1) return 1;
  // recursive case
  return x + recursiveRange(--x);
}
console.log(recursiveRange(4));