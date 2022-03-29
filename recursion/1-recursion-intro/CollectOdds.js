function collectOdds(nums){
  let result = [];

  function helper(arr){
    // base case
    if(arr.length === 0) return;
    // diff input
    if(arr[0] % 2 !== 0) result.push(arr[0]);
    helper(arr.slice(1));
  }

  helper(nums);
  return result;
}

console.log(collectOdds([1,2,3,4,5]));