// Given two strings, write a functions to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letter of another.
// ex. cinema => iceman

//  ----------------------------------------------------------------------------------------------- 
//  time => O(n)
//  space => O(n)

//  STEP 1 -- UNDERSTAND THE PROBLEM
//  1. Can I restate the problem in my own words?
//    - func that returns bool if two input strings are an anagram
//  2. What are the inputs that go into the problem?
//    - two strings 
//  3. What are the outputs that should come from the solution of the problem?
//    - true str1 is anagram of str2
//  4. Can the outputs be determined from the inputs? In other words,
//     do I have enough information to solve the problem?
//      - yes
//  5. How should I label the important pieces of data that a part of the problem?

//   STEP 2 -- CONCRETE EXAMPLES
//   1. start with simple examples
//        - str1 = 'dog', str2 = 'dog =>
//   2. progress to more complex examples
//   3. explore examples with empty inputs
//   4. explore examples with invalid inputs

//   STEP 3 -- BREAK IT DOWN
//   function validAnagram(str1, str2){
//      if str1.length !== str2.length
//        return false
//      make fq1 for str1
//      make fq2 for str2
//      loop through keys in fq1
//   }
//
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
/**
 * time => O(n)
 * 
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let fq1 = {};
  let fq2 = {};

  for (let s of str1) {
    fq1[s] = (fq1[s] || 0) + 1;
  }
  for (let s of str2) {
    fq2[s] = (fq2[s] || 0) + 1;
  }

  for (let key in fq1) {
    if (!(key in fq2)) {
      return false;
    }
    if (fq2[key] != fq1[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let c of str1) {
    lookup[c] ? lookup[c] += 1 : lookup[c] = 1;
  }

  for (let c of str2) {
    if (!lookup[c]) {
      return false;
    } else {
      lookup[c] -= 1;
    }
  }

  return true;
}

console.log(validAnagram1('anagram', 'nagaram'));
console.log(foo('anagram', 'nagaram'));