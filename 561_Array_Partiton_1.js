// 561. 数组拆分 I
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let n = nums.length / 2
    nums.sort((a,b)=> a-b)
    let sum = 0
    for(let i=0;i<nums.length-1;i=i+2){
        sum = sum + nums[i]
    }
    return sum
};