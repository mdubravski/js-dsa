/**
 * Write a function sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 * */

function foo(arr) {

}

/**
 ----------------------------------------------------------------------------------------------- 
  time => O()
  space => O()

  STEP 1 -- UNDERSTAND THE PROBLEM
  1. Can I restate the problem in my own words?
    "find the first pair of integers in sorted array whose sum is 0"
  2. What are the inputs that go into the problem?
    "sorted array of integers"
  3. What are the outputs that should come from the solution of the problem?
    "if true, return [val1, val2]"
    "else, return undefined"
  4. Can the outputs be determined from the inputs? In other words,
     do I have enough information to solve the problem?
     "yes"
  5. How should I label the important pieces of data that a part of the problem?

   STEP 2 -- CONCRETE EXAMPLES
   1. start with simple examples
    "sumZero([-4,1,2,3,4]) => [-4,4]"
    "sumZero([-4,1,2,3,5]) => undefined"
   2. progress to more complex examples
   3. explore examples with empty inputs
   4. explore examples with invalid inputs

   STEP 3 -- BREAK IT DOWN
   function sumZero(arr){
     
   }

   function charCount(str){
     make obj to return at end
     loop over str, for each char
       if char is a number/letter AND key in obj, add one to count
       if char is a number/letter AND not key in obj, add char to obj and set value to 1
       if char is something else (space, period, ...) dont do anything
     return obj
   }

   STEP 4 -- SOLVE OR SIMPLIFY
     - fill in parts from step 3

   STEP 5 -- LOOK BACK AND REFACTOR
     - Can you check the result?
     - Can you derive the result differently?
     - Can you understand it at a glance?
     - Can you use the result or method for some other problem?
     - Can you improve the performance of your solution?
     - Can you think of other ways to refactor?
     - How have other people solved this problem?
-----------------------------------------------------------------------------------------------
 * 
 */

// time => O(n^2)
// space => O(1)
function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return undefined;
}

//console.log(naiveSumZero([-1,1,2,3]));

// time => O(n)
// space => O(1)
function fastSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(fastSumZero([-4, -1, 1, 2, 3, 5]));
console.log(foo([-4, -1, 1, 2, 3, 5]));