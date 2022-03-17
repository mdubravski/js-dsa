/**
 * Implement a function called, areThereDuplicates which accepts a variable
 * number of arguments, and checks whether there are any duplicates among the 
 * arguments passed in.
 * 
 * O(n)
 * 
 * areThereDuplicates(1,2,3) // false
 * areThereDuplicates(1,2,2) // true
 */

function areThereDuplicates() {
  // make fc for args
  // loop keys in fc 
    // if fc[k] > 1, return false
  // return true

  let fc = {};
  for (let i = 0; i < arguments.length; i++) {
    fc[arguments[i]] = (fc[arguments[i]] || 0) + 1;
  }
  for (let k in fc) {
    if (fc[k] > 1) return true;
  }
  return false;
}