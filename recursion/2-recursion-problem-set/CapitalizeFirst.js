/**
 * Write a recursive function called capitalizeFirst, given an array of strings
 * capitalize the first letter of each string in the array.
 * 
 * capitalizeFirst(['car','taco','banana']); , ['Car','Taco','Banana']
 */

function capitalizeFirst(arr) {

  let newArr = [];

  function helper(a) {
    if (a.length === 0) return;
    let s = a[0];
    newArr.push(a[0].charAt(0).toUpperCase() + a[0].slice(1));
    helper(a.slice(1));
  }
  helper(arr);
  return newArr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));