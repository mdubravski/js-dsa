/**
 * O(1)
 */
function logAtMost5(n){
  for(let i=1; i<=Math.min(5,n); i++){
    console.log(i);
  }
}
console.log(logAtMost5(3));