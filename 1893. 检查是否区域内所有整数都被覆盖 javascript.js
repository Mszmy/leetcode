var isCovered = function(ranges, left, right) {
    for(var i=left;i<=right;i++){
        let flag = false;
        for(var tmp of ranges){
            let len = tmp.length;
            // 如果在这个区间内，则将flag 改为 true 
            if(tmp[0] <=i && i<= tmp[len-1]){
                flag = true;
                break;
            }
        }
        if (flag)continue;
        else return false;
    }
    return true;
};
