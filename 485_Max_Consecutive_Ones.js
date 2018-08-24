/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  // 方法1:利用字符串的split方法
  let str=nums.join('').split('0')
  let max=str[0].length
  for (let i=1;i<str.length;i++) {
      if (max<str[i].length) {
          max=str[i].length
      }
  }
  return max
  
  // 方法2: 利用一个obj存储临时sum值和连续1的max值
  // let num = { sum: 0, max: 0 }
  // for(let i = 0;i < nums.length;i++){
  //     if(nums[i] === 1){
  //         num.sum++
  //     }else {
  //         num.max = Math.max(num.sum, num.max)
  //         num.sum = 0
  //     }
  // }
  // return Math.max(num.sum, num.max)
};