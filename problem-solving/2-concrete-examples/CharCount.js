/**
 * --------------------------------------------------------------------------------------------
 * Write a functions which takes in a string and returns counts of each character in the string
 * --------------------------------------------------------------------------------------------
 * 
 * time => O()
 * space => O()
 * 
 *   STEP 1
 *   1. Can I restate the problem in my own words?
 *      - function that returns the total number of each unique char in a string
 *   2. What are the inputs that go into the problem ?
 *      -  string
 *   3. What are the outputs that should come from the solution of the problem?
 *      - array of objs where obj key is char and value is count
 *      - array of obj
 *   4. Can the outputs be determined from the inputs? In other words,
 *      do I have enough information to solve the problem?
 *      - yes
 *   5. How should I label the important pieces of data that a part of the problem?
 *      - str = inputs string, arr = output array 
 * 
 *    STEP 2
 *    1. start with simple examples
 *        - charCount('aaaa') => [{a:4}]
 *        - charCount('aabccc') => [{a:2}, {b:1}, {c:3}]
 *    2. progress to more complex examples
 *        - charCount('Hello my name is Michael') => [{}{}{}]
 *    3. explore examples with empty inputs
 *        - charCount('') => 0
 *    4. explore examples with invalid inputs
 *        - charCount(123) => convert to string? throw exception?
 * 
 */

