var mySqrt = function(x) {
    for(let i =1;i<=x;i++){
        let a = i*i
        if(a === x)
            return i
        else if(a > x)
            return i-1
    }
    return 0 
};

