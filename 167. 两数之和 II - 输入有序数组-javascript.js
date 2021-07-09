var twoSum = function(numbers, target) {
    // 返回两个数的下标值, 下标从1开始
    let res = []
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(target - numbers[i] === numbers[j]){
                res.push(i+1,j+1)
                break
            }
        }
    }
    return res
};
