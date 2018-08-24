/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // 方法1:不接住任何空间，原地标记法
  var returnArr = [];
  //[4,3,2,7,8,2,3,1]
  //[-4,-3,-2,-7,8,2,-3,-1]
  for(var i = 0; i < nums.length; i++){
      var index = Math.abs(nums[i]) - 1;
      if(nums[index] > 0){
         nums[index] = -nums[index];   
      }
  }
  for(var i = 0; i < nums.length; i++){
      if(nums[i] > 0){
          returnArr.push(i+1);
      }
  }
  return returnArr;
  
  // 方法2: 借助一个obj对象做标记
//     let length = nums.length
//     let obj = {}
//     let result = []
//     for (let i = 0; i < length; i++) {
//         if (!obj[nums[i]]) {
//             obj[nums[i]] = true
//         }
//     }

//     for (let i = 0; i < length; i++) {
//         if (!obj[i + 1]) {
//         result.push(i + 1)
//         }
//     }
//     return result
      
  // 方法3: 去重，排序，找缺省的数字
//     let n = nums.length
//     let arr = new Set(nums)
//     let arrSorted = [...arr].sort((a,b)=> b-a)
//     let result = []
//     for(let i=1;i<=n;i++){
//         if(arrSorted.indexOf(i) == -1)
//             result.push(i)
//     }
//     return result
};