var totalHammingDistance = function(nums) {
    var sum = 0
    for(var i =0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            sum += hammingDistance(nums[i],nums[j])
        }
    }
    return sum
};

// 计算汉明距离
var hammingDistance = function(x,y){
    return (x^y).toString(2).replace(/0/g,'').length;
}
//双重循环暴力破解------超出时间限制
