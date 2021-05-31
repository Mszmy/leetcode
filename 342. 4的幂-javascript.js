var isPowerOfFour = function(n) {
    var tmp = parseInt(n/4)
    for(var i=0;i<=tmp;i++){
        if(Math.pow(4,i) == n)return true
    }
    return false
};
//超时
