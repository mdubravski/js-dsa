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
  // make pointers l=0, r=arguments.length
  // loop while(l<r)
  // if args[l] === arg[r], return true
  // else if args[l] < args[r], l++
  //else r--
  // return false
  let l = 0,
    r = arguments.length;
  while (l < r) {
    if (arguments[l] === arguments[r]) {
      return true;
    } else if (arguments[l] < arguments[r]) {
      l++;
    } else {
      r--;
    }
  }
  return false;
}