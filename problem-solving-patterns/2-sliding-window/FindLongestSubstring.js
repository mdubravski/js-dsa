/**
 * Write a function called findLongestSubstring, which accepts a string and 
 * returns the length of the longest substring with all distinct characters.
 * 
 * findLongestSubstring(''), 0
 * findLongestSubstring('rithmschool'), 7
 * findLongestSubstring('thisisawesome'), 6
 * findLongestSubstring('bbbbbb'), 1
 * findLongestSubstring('longestsubstring'), 8
 * 
 * Time => O(n) (worst case both loops have to go through n numbers)
 * Space => O(n) (n = size of string)
 */

let findLongestSubstring = s => {
  if(s === null || s.length === 0) return 0;
  let i=0, j=0, max=0;
  let set = new Set();

  while(i < s.length){
    while(set.has(s[i])){
      set.delete(s[j]);
      j++;
    }
    set.add(s[i]);
    max = Math.max(max, i-j + 1);
    i++;
  }
  return max;
};
console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));