// 268. 缺失数字
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let array = new Array()
  let n = nums.length
  for(let i = 0; i<= n; i++){
      array[i] = -1
  }
  for(let i = 0;i<n; i++){
      array[nums[i]] = 1
  }
  return array.indexOf(-1)
  
};