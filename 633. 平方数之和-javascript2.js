var judgeSquareSum = function(c) {
    var i = 0, j = Math.floor(Math.sqrt(c)), s = 0
    while(i <= j){
        s = i * i + j * j
        if(s == c) return true
        s > c ? j-- : i++
    }
    return false
};
