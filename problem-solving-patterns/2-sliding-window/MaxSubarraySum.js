/**
 * Write a function called maxSubarraySum(arr, n) which accepts an array of integers
 * and a number n. The function should calculate the maximum sum of n consecutive
 * elements in the array.
 */

/**
 * time => O(n^2)
 * space => O(1)
 */
function naiveMaxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j];
    }
    if (sum > max) max = sum;
  }

  return max;
}

/**
 * time => O(n)
 * space => O(1)
 */
function fastMaxSubarraySum(arr, n){
  if(arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;
  
  for(let i=0; i<num; i++){
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i=n; i < arr.length; i++){
    tempSum = tempSum - arr[i-n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(naiveMaxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(fastMaxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));