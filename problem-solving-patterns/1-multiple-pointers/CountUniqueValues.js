/**
 * Implement a function countUniqueValues which accepts a sorted array,
 * and counts the unique values in the array. There can be negative 
 * numbers in the array, but it will always be sorted.
 * Return the number of unique values.
 */

// naiveCountUniqueValues(arr){
//   let ret = [];
//   for(let i=0; i<arr.length; i++){
//     for(let j=i+1; i<arr.length; i++){
//       if(arr[i] === arr[j]) break;
//       ret.push(arr[j])
//     }
//   }
// }

/**
 * time => O(n)
 * space => O(n)
 * this one returns the number of values that are not duplicates
 */
function fqCountUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let obj = {};
  let ret = [];
  for (let n of arr) {
    obj[n] = (obj[n] || 0) + 1;
  }
  for (let k in obj) {
    if (obj[k] === 1) ret.push(k);
  }
  return ret.length;
}

/**
 * 
 * time => O(n)
 * space => O(n)
 * 
 */
function fqCountUniqueValues1(arr) {
  if (arr.length === 0) return 0;

  let obj = {};
  for(let n of arr){
    obj[n] =(obj[n] || 0) + 1;
  }
  return Object.keys(obj).length;
}

/**
 * 
 * time => O(n)
 * space => O(n)
 * 
 */
function mpCountUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}
                           //          i            j 
console.log(fqCountUniqueValues([3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]));
console.log(fqCountUniqueValues1([3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]));
console.log(mpCountUniqueValues([3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]));