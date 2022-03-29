/**
 * Write a function factorial which accepts a number and returns the factorial
 * of that number. A factorial is the product of an integer and all the integers
 * below it. 
 *  -(e.g., 4! = 4*3*2*1)
 *  -(0! = 1)
 */
function factorial(x){
  // base case
  if(x === 0) return 1;
  // recursive case
  return x * factorial(--x);
}

console.log(factorial(4));