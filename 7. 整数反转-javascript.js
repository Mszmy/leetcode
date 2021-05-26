var reverse = function(x) {
    if(x<0){
        arrs = (-x).toString().split('')
    }else{
        arrs = x.toString().split('')
    }
    arrs = x.toString().split('')
    y = parseInt(arrs.reverse().join(''))
    y = x>=0?y:-y
    if(y>2147483648 || y< -2147483648)return 0
    return y
};
