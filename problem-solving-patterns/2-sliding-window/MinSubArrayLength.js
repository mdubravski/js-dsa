/**
 * Write a functions called minSubArrayLen which accepts two parameters,
 * an array of positive integers and a positive integer. This function
 * should return the minimal length of a contiguous subarray of which the
 * sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 * 
 * minSubArrayLen([2,3,1,2,4,3], 7), 2 -> because [4,3] is the smallest subarray
 * minSubArrayLen([2,1,6,5,4], 9), 2 -> because [5,4] is the smallest subarray
 * minSubArrayLen([3,1,7,11,62,33, 52]), 1 -> because [62] is greater than 52
 *         
 * time => O(n)
 * space => O(1)          l          
 */

function minSubArrayLen(arr, n){
  // init result = Number.MAx
  // init pointer l = 0
  // init sum = 0

  // loop through arr
    // sum += arr[i]
    // loop while sum >= n
      // result = min(result, i + 1 - l)
      // sum =- nums[l]
      // l++

      let result = Number.MAX_SAFE_INTEGER;
      let l = 0;
      let sum = 0;

      for(let i=0; i<arr.length; i++){
        sum += arr[i];
        while(sum >= n){
          result = Math.min(result, i + 1 - l);
          sum -= arr[l];
          l++;
        }
      }

      return result === Number.MAX_SAFE_INTEGER ? 0 : result;

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,62,33, 52]));


