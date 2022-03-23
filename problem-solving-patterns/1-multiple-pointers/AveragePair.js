/**
 * Write a function called averagePair. Given a sorted array of integers,
 * and a target average, determine if there is a pair of values in the array
 * where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 */

function averagePair(arr, target) {
  // declare avg
  // initialize pointers l-0, r= arr.length-1
  // loop through arr
  // calculate avg
  // if avg === target, return true
  // else if avg < target, l++
  // else r++
  // return true
  let avg;
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    avg = (arr[l] + arr[r]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      l++;
    } else {
      r--;
    }
  }
  return false;
}