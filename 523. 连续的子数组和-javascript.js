var checkSubarraySum = function(nums, k) {
    // 遍历数组 是否是它的倍数则 数%k==0
    if(nums.length<2)return false
    var sum = 0
    for(var i=0;i<nums.length-1;i++){
        sum = nums[i]
        for(var j=i+1;j<nums.length;j++){
            sum += nums[j]
            // console.log(sum)
            if(sum%k ==0)return true
        }
    }
    return false
};
//超时
