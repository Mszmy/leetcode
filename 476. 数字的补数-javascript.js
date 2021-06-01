var findComplement = function(num) {
    // 先将数字转换成二进制，再求补数，再转换成十进制返回
    var arr = num.toString(2).split('')
    for(var i=0;i<arr.length;i++){
        if(arr[i] ==0)arr[i]=1
        else arr[i]=0
    }
    return parseInt(arr.join(''),2)
};
