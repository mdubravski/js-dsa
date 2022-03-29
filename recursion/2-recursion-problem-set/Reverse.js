/**
 * Write a function called reverse which accepts a string and return 
 * a new string in reverse.
 * 
 * reverse('hello'), 'olleh'
 * 
 */

function reverse(s){
  let rev = '';

  function helper(t){
    // base case
    if(t.length === 0) return; 
    // recursive case
    rev += t[t.length-1];
    helper(t.slice(0,t.length-1));
  }

  helper(s);
  return rev;
}

console.log(reverse('hello'));
 