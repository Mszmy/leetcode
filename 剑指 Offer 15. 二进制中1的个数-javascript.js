var hammingWeight = function(n) {
    // 先用正则表达式获取到含1的数组，返回数组长度
    let r1 = n.toString(2).match(/1/g)
    if(r1==null)return 0
    else return r1.length
    // return (r1==[])?0:r1.length
};
