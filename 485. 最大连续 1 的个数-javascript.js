var findMaxConsecutiveOnes = function(nums) {
    var obj = {}
    var tmp = 0
    for(var i=0;i<nums.length;i++){
        if(nums[i]==1){
            obj[i] = 1
        }else{
            obj ={}
        }
        var arr = Object.keys(obj);
        var len = arr.length;
        if(len>tmp)tmp = len
    }
    return tmp
};
//时间太长
