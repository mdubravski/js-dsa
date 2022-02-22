/**
 * time => O(n)
 * space => O(n)
 */
function double(arr){
  let dArr = [];
  for(let i=0; i< arr.length; i++){
    dArr.push(arr[i] * 2);
  }
  return dArr;
}

console.log(double([1,2,3]));