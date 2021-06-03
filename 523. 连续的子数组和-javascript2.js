var checkSubarraySum = function(nums, k) {
    var map = new Map()
    map.set(0, -1);
    var sum = 0
    for(var i = 0 ; i < nums.length; i++){
        sum+= nums[i]
        if(k != 0){
            sum = sum % k   //计算前面数的余数和
        }
        if(map.has(sum)){
            if(i - map.get(sum) > 1){
                return true
            }
        }else {
           map.set(sum, i) 
        }          
    }
    return false
};
