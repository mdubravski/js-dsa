/**
 * --------------------------------------------------------------------------------------------
 * Write a functions which takes in a string and returns counts of each character in the string
 * --------------------------------------------------------------------------------------------
 * 
 * time => O()
 * space => O()
 * 
 *   STEP 1 -- UNDERSTAND THE PROBLEM
 *   1. Can I restate the problem in my own words?
 *      - function that returns the total number of each unique char in a string
 *   2. What are the inputs that go into the problem ?
 *      -  string (lowercase alphanumeric)
 *   3. What are the outputs that should come from the solution of the problem?
 *      - array of objs where obj key is char and value is count
 *      - array of obj
 *   4. Can the outputs be determined from the inputs? In other words,
 *      do I have enough information to solve the problem?
 *      - yes
 *   5. How should I label the important pieces of data that a part of the problem?
 *      - str = inputs string, arr = output array 
 * 
 *    STEP 2 -- CONCRETE EXAMPLES
 *    1. start with simple examples
 *        - charCount('aaaa') => [{a:4}]
 *        - charCount('aabccc') => [{a:2}, {b:1}, {c:3}]
 *    2. progress to more complex examples
 *        - charCount('Hello my name is Michael') => [{..},{..},{..},..]
 *    3. explore examples with empty inputs
 *        - charCount('') => 0
 *    4. explore examples with invalid inputs
 *        - charCount(123) => convert to string? throw exception?
 * 
 *    STEP 3 -- BREAK IT DOWN
 *    function charCount(str){
 *      do something
 *      return obj with lowercase keys that are alphanumeric chars in string; values should be frequency
 *    }
 * 
 *    function charCount(str){
 *      make obj to return at end
 *      loop over str, for each char
 *        if char is a number/letter AND key in obj, add one to count
 *        if char is a number/letter AND not key in obj, add char to obj and set value to 1
 *        if char is something else (space, period, ...) dont do anything
 *      return obj
 *    }
 * 
 */

function charCount(str){
  // do something
  // return obj with lowercase keys that are alphanumeric chars in string; values should be frequency
}

function charCount(str){
  // make obj to return at end
  // loop over str, for each char
  //    if char is a number/letter AND key in obj, add one to count
  //    if char is a number/letter AND not key in obj, add char to obj and set value to 1
  //    if char is something else (space, period, ...) dont do anything
  // return obj
}

