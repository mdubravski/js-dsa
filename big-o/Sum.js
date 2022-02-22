/**
 * time => O(n)
 * space => O(1)
 */
function sum(arr){
  let total = 0;
  for(let i=0; i<arr.length; i++){
    total += arr[i];
  }
  return total;
}