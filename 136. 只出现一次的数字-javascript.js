var singleNumber = function(nums) {
    // 通过对象放置每个元素和对应出现的次数，然后找到次数为1的返回
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in obj) obj[nums[i]] +=1
        else{obj[nums[i]] =1}
    }
    for(n in obj){
        if(obj[n] == 1)return n
    }
};
