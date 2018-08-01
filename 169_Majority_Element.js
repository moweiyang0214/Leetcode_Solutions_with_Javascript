/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 这个方法也可以，不过就是效率不如第二个好
  // let obj = {}   
  // let len = nums.length
  // for(let i=0;i<len;i++){
  //     let cur = nums[i]
  //     if(!obj[cur]){
  //         obj[cur]=1
  //     }else {
  //         obj[cur]++
  //     }
  //    if(obj[cur]> len/2)
  //        return cur
  // }
 let count = 0;
 let candidate = 0;
 for (let i = 0; i < nums.length; i++) {
     if (count == 0) {
         candidate = nums[i];
     }
     if (candidate == nums[i]) count++;
     else count--;
 }
 return candidate;
};