var nextGreaterElement = function(nums1, nums2) {
    // 先定位到nums1的元素在nums2中的位置，然后判断后面是否有比他大的值
    var result = []
    for(var n of nums1){
        // console.log('n',n)
        var index = nums2.indexOf(n)
        // console.log('index',index)
        if(index==nums2.length-1){
          result.push(-1);
        }else{
            for(var i=index+1;i<nums2.length;i++){
                if(n<nums2[i]){
                    result.push(nums2[i])
                    break;
                }else {
                    if(i===nums2.length-1){
                        result.push(-1);
                    }
                }
            }
        }
    }
  return result
};
