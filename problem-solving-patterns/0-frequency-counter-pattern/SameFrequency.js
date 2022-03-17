
/**
 * Write a function called SameFrequency. Given two positive integers,
 * find out id the two numbers have the same frequency of digits 
 * 
 * MUST be O(n)
 * 
 * sameFrequency(182,821), true
 * sameFrequency(123,124), false
 * sameFrequency(222,22), false
 */
function sameFrequency(x, y) {
  // make fc's for x and y 
  // loop keys in fc1
  // if fc1[k] !== fc2[k] return false
  // reutrn true

  x = String(x);
  y = String(y);
  let fc1 = {};
  let fc2 = {};

  for (let n of x) {
    fc1[n] = (fc1[n] || 0) + 1;
  }

  for (let n of y) {
    fc2[n] = (fc2[n] || 0) + 1;
  }

  for (let k in fc1) {
    if (fc1[k] !== fc2[k]) return false;
  }
  return true;
}