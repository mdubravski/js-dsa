/**
 * Write a function called isSubsequence which takes in two strings and checks
 * whether the characters in the first sting form a subsequence of the characters
 * in the second string. In other words, the functions should check whether the
 * characters first string appear somewhere in the second string, without changing
 * order.
 * 
 * isSubsequence('hello', 'hello world'), true
 * isSubsequence('sing', 'string'), true
 * isSubsequence('abc' 'acb'), false
 * 
 * Time => O(N+M)
 * Space => O(1)
 */

function isSubsequence(s, t) {
  // make pointer p=0,
  // loop through t
    // if p === s.length, return true
    // if(s[p] === t[i]), p++
  // return false
  
  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (p === s.length - 1) {
      return true;
    } else if (s[p] === t[i]) {
      p++;
    }
  }
  return false;
}