/**
 * Write a recursive function called capitalizeWords, that given an array of words
 * will return a new array containing each word capitalized
 */

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  let cArr = [];
  if(arr.length === 0) return;
  cArr.push(arr[0].toUpperCase());
  return cArr.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

