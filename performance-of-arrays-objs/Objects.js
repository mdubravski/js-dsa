/**
 * Objects = unordered, key-value pairs
 *  - when you don't need any ordering objects are an excellent choice!
 *      insertion => O(1)
 *      removal => O(1)
 *      searching => O(n)
 *      access => O(1)
 *      
 *  - Object methods
 *      Object.keys => O(N)
 *      Object.values => O(N)
 *      Object.entries => O(N)
 *      hasOwnProperty => O(1)
 */

let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1,2,3],
}

console.log(instructor.hasOwnProperty('firstName'));