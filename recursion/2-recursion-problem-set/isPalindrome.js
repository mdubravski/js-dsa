/**
 * Write a recursive function called isPalindrome which returns true if the 
 * string passed to it is a palindrome (reads same forward and backward).
 * Otherwise return false
 * 
 * isPalindrome('foobar'), false
 * isPalindrome('tacocat'), true
 */

function isPalindrome(s){
  if(s.length <= 1) return true;
  return s[0] === s[s.length-1] ? isPalindrome(s.slice(1,s.length-1)) : false;
}

console.log(isPalindrome('tacocat'));