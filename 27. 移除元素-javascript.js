var removeElement = function(nums, val) {
    let res = 0
    for(let num of nums){
        if(num !== val){
            nums[res] = num
            res ++ 
        }
        console.log(res)
    }
    return res
};
