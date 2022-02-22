/**
 * O(2n) => O(n);
 */
function countUpAndDown(n){
  console.log('Going up ...');
  for(let i=0; i<=n; i++){
    console.log(i);
  }
  console.log('At the top!\nGoing down ...');
  for(let i=n; i >= 0; i--){
    console.log(i);
  }
  console.log('Done!');
}

console.log(countUpAndDown(10));