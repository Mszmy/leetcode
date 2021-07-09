var twoSum = function(numbers, target) {
    // 返回两个数的下标值, 下标从1开始
    let res = []
    for(let i=0;i<numbers.length;i++){
        let index = numbers.indexOf(target - numbers[i],i+1) // 从 i+1开始，往后找
        if(index!== -1){
            res.push(i+1,index+1)
            break; 
        }
    }
    return res
};
