// 219. 存在重复元素 II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
//     if(k>= nums.length) {       
//         var n = nums.length
//     }else {
//         var n = nums.length - k -1
//     }
        
//     for(let i=0;i<n;i++){
//         for(let j= i+1;j<i+k+1;j++){
//             if(nums[i] == nums[j])
//                 return true
//         }
//     }
//     return false
    
    // 方法2: 使用obj存储出现过的数字
    if(nums.length <= 1) return false;
    var obj = {};
    for(let i in nums){
        let v = nums[i];
        if(obj[v] && (i - obj[v] <= k)){
            return true;
        }
        obj[v] = i;
    }
    return false;
};