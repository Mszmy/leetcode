var singleNumber = function(nums) {
    var obj = {}; 
    for(var i= 0; i< nums.length; i++){ 
        var item = nums[i]; 
        obj[item] = (obj[item] +1 ) || 1; 
    } 
    // console.log(obj)
    for(item in obj){
        if(obj[item]==1)return item;
    }
};
