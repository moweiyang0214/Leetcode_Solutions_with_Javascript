/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // 方法1: 数组转换成集合（去重），排序，找到第三大的数
  const numsFiltered = new Set(nums);
  const numsSorted = [...numsFiltered].sort((a, b) => b - a);
  console.log(numsSorted);
  if (numsSorted.length >= 3) {
      return numsSorted[2];
  } else {
      return numsSorted[0]
  }
//     if(nums.length <3)
//         return Math.max(nums[0],nums[1])
  
//     if(nums.length == 3 && nums[0] !== nums[1] && nums[0]!== nums[2]&& nums[1]!== nums[2])
//         return Math.min(...nums)
  
//     if(nums.length == 3 && (nums[0] == nums[1] || nums[1]== nums[2]|| nums[0]== nums[2]))
//         return Math.max(...nums)
  
//     let arr = []
//     for(let i = 0 ;i< nums.length; i++){
//         let temp = nums[i]
//         if(arr.indexOf(temp) == -1 && arr.length <3){
//             arr.push(temp)
//         }else if(arr.indexOf(temp)!== -1){
//             continue
//         }else if(arr.length == 3){
//             let min = Math.min(...arr)
//             if(min < temp){
//                  let j = arr.indexOf(min)
//                 arr[j] = temp
//             }
//         }
//     }
  
//     if(arr.length ==2){
//         return Math.max(...arr)
//     }else if(arr.length == 1){
//         return arr[0]
//     }else {
//         return Math.min(...arr)
//     }
};