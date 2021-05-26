var decode = function(encoded, first) {
    // 返回数组中第一个就是first数值，其余的为异或后的结果。
    let result = [];
    result[0] = first ;
    for(let i=1;i<encoded.length+1;i++){
        result[i] = result[i - 1] ^ encoded[i - 1];
    }
    // console.log(result)
    return result

};
