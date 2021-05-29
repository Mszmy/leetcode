//非递归方法----循环
var fib = function(n) {
    //非递归方法
    var result = []
    for(var i=0;i<=n;i++){
        if(i <=1) result.push(i)
        else result.push(result[i-1] + result[i-2])
    }
    return result[n]
};
