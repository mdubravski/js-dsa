/**
 * 
 * Write a function same, which accepts two arrays. 
 * The function should return true if every value in the array has it's corresponding
 * value squared in the second array. The frequency if the values must be the same.
 * 
 */

function same5(arr1, arr2){

}

//  ----------------------------------------------------------------------------------------------- 
//  time => O(n)
//  space => O(n)

//  STEP 1 -- UNDERSTAND THE PROBLEM
//  1. Can I restate the problem in my own words?
//    - func returns same if second array is made up of first array elements squared
//  2. What are the inputs that go into the problem?
//    - two arrays, arr1 = [1,2,3], arr2 = [1,4,9]
//  3. What are the outputs that should come from the solution of the problem?
//    - true if second array is made up of first array elements squared, else false
//  4. Can the outputs be determined from the inputs? In other words,
//     do I have enough information to solve the problem?
//      - yes
//  5. How should I label the important pieces of data that a part of the problem?

//   STEP 2 -- CONCRETE EXAMPLES
//   1. start with simple examples
//        - arr1 = [1,2,3], arr2 = [1,4,9]
//   2. progress to more complex examples
//   3. explore examples with empty inputs
//   4. explore examples with invalid inputs

//   STEP 3 -- BREAK IT DOWN
//   function same(arr1, arr2){
//      make sqArr to return
//      if !(arr1.length === 0 OR arr2.length === 0 OR arr1.length != arr2.length)
//        loop through arr1 and make sqArr of arr[i]^2
//          if(sqArr === arr2)
//            return true
//      else    
//        return false
//   }

//   function charCount(str){
//     make obj to return at end
//     loop over str, for each char
//       if char is a number/letter AND key in obj, add one to count
//       if char is a number/letter AND not key in obj, add char to obj and set value to 1
//       if char is something else (space, period, ...) dont do anything
//     return obj
//   }

//   STEP 4 -- SOLVE OR SIMPLIFY
//     - fill in parts from step 3

//   STEP 5 -- LOOK BACK AND REFACTOR
//     - Can you check the result?
//     - Can you derive the result differently?
//     - Can you understand it at a glance?
//     - Can you use the result or method for some other problem?
//     - Can you improve the performance of your solution?
//     - Can you think of other ways to refactor?
//     - How have other people solved this problem?
// -----------------------------------------------------------------------------------------------


// function same(arr1, arr2){
//    make sqArr to return
//    if !(arr1.length === 0 OR arr2.length === 0 OR arr1.length != arr2.length)
//      loop through arr1 and make sqArr of arr[i]^2
//        if(sqArr === arr2)
//          return true
//    else    
//      return false
// }

function same(arr1, arr2) {
  let squareArr = [];
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    squareArr.push(Math.pow(arr1[i], 2));
    if (squareArr[i] != arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * time => O(n^2)
 * space => O(n)?
 */
function naiveSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

/**
 * time => O(n)
 * space => O(n)?
 */
function fastSame(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}


console.log(same5([1, 2, 3, 2], [9, 1, 4, 4]));