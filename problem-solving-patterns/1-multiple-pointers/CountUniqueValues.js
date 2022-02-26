/**
 * Implement a function countUniqueValues which accepts a sorted array,
 * and counts the unique values in the array. There can be negative 
 * numbers in the array, but it will always be sorted.
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
 */
function fqCountUniqueValues(arr) {
  let obj = {};
  let ret = [];
  for (let n of arr) {
    obj[n] = (obj[n] || 0) + 1;
  }
  for (let k in obj) {
    if (obj[k] === 1) ret.push(k);
  }
  return ret;
}

function mpCountUniqueValues(arr) {
  let i = 0;
  for(let j=1; j<arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
    console.log(i,j);
  }
  return i+1;
}

console.log(fqCountUniqueValues([-2, -1, -1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 8, 8]));
console.log(mpCountUniqueValues([-2, -1, -1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 8, 8]));