/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if(nums.length*nums[0].length !== r*c){
      return nums
  }
  if(nums.length === nums[0].length && r===c){
      return nums
  }
  let arr=[]
  for (let i = 0; i < nums.length; i++) {
      arr.push(...nums[i])
  } 
  let result = []
  for(let j=0;j<r;j++){
      let temp= []
      for(let i=0;i<c;i++){
          temp.push(arr.shift())
      }
      result.push(temp)
  }
  return result
};
