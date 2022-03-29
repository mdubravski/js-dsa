function collectOdds(arr){
  let result = [];

  function helper(nums){
    // base case
    if(nums.length === 0) return;
    // diff input
    if(nums[0] % 2 !== 0){
      result.push(nums[0]);
    }
    helper(nums.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOdds([1,2,3,4,5]));