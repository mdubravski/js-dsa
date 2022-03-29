/**
 * Write a function called power which accept a base and an exponent. The function
 * should return the power of the base to the exponent. This function should mimic
 * the functionality of Math.pow()
 *  - do not worry about negative bases and exponents
 */

function power(b,e){
  // base case
  if(e === 0) return 1;
  // recursive case
  return b * (power(b, --e));
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));