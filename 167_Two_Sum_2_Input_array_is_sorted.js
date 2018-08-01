// 167. 两数之和 II - 输入有序数组
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0,j=numbers.length-1;
    while(i<j){
        if((numbers[i]+numbers[j])===target)return [i+1,j+1];
        if((numbers[i]+numbers[j])>target)j--;
        if((numbers[i]+numbers[j])<target)i++;
    }
    return [];
    
    // 这个方法也可以实现，不过效率不是很好
    // for(let i=0;i<numbers.length-1; i++){
    //     for(let j=i+1;j<numbers.length;j++){
    //         if(numbers[i]+ numbers[j] === target){
    //             return [i+1,j+1]
    //         }
    //     }
    // }
};