// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
/**
 * 
 * time =>O(n^2) 
 * space => O(1)
 */
let twoSum = function(nums, target) {
  let diff;
  for(let i =0; i< nums.length; i++){
      diff = target - nums[i];
      if(nums.includes(diff) && nums.indexOf(diff) !== i){
          let ret = [];
          ret.push(i);
          ret.push(nums.indexOf(diff));
          return ret;
      }
  }
};

/**
 * time=> O(n)
 * space => O(1)
 */
let twoSum1 = function(nums, target) {
  let obj = {};
  
  for(let i=0; i<nums.length;i++){
      if(target-nums[i] in obj){
          return [obj[target-nums[i]], i];
      }else{
          obj[nums[i]] = i;
      }
  }
};


console.log(twoSum1([2,7,11,15],9));