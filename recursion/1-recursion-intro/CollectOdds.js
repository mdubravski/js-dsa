/**
 * Helper Method Recursion 
 *  - pattern where outer non-recursive function calls inner recursive function
 */
function collectOddsHR(arr){
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

/**
 * Pure Recursion 
 *  - no helper method or external ds in function
 */
function collectOddsPR(arr){
  let odds = [];

  // base case
  if(arr.length === 0) return odds;
  // diff input
  if(arr[0] % 2 !== 0) odds.push(arr[0]);

  odds = odds.concat(collectOddsPR(arr.slice(1)));
  return odds;
}

console.log(collectOddsPR([1,2,3,4,5]));