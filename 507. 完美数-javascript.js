var checkPerfectNumber = function(num) {
    // 先得到num的所有正因子，然后相加判断
    // 1 找到所有正因子 并去除 数组中它本身
    let arr = []
    for(let i=1;i<=num/2;i++){
        if(num % i==0 && i!==num)arr.push(i)
    }

    let sum = eval(arr.join("+"))
    if(sum === num)return true
    return false 
};
