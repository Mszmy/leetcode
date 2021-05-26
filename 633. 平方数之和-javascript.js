var judgeSquareSum = function(c) {
    for(var i=0;i*i<=c;i++){
        a = Math.pow(i,2)
        b = Math.sqrt(c-a)
        if(b == parseInt(b)){
            // console.log(b)
            return true;
        }
    }
    return false;
};
