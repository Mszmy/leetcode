var majorityElement = function(nums) {
    if(nums.length == 0)return -1
    else if(nums.length==1)return nums[0]
    // 可以用对象保存每个出现的次数，最后返回次数最多的那个
    let datas = {}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in datas)datas[nums[i]] ++
        else datas[nums[i]]=1
    }
    // console.log(datas)
    // 将对象进行升序排序，最后返回第一个即可
    let sorted_keys_array = Object.keys(datas).sort((a,b)=>{
       return datas[b]-datas[a];
    });
    // console.log(sorted_keys_array)
    if(datas[sorted_keys_array[0]] !== 1 && datas[sorted_keys_array[0]] > (nums.length / 2)){
        console.log(datas[sorted_keys_array[0]]);
        return sorted_keys_array[0]
    }
    else return -1
};
