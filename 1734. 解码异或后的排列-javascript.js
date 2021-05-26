var decode = function(encoded) {
    // 核心关键点就在于求出第一位数
    var n = encoded.length + 1;
    // 创建一个长度为n的空数组
    var res = new Array(n);
    var total = 0;
    for(var i=1;i<=n;i++){
        total ^=i;
    }

    var odd = 0
    for(var j=1;j<n-1;j+=2){
        odd ^= encoded[j]
    }
    res[0] = odd ^ total;
    for(var z=1;z<n;z++){
        res[z] = res[z-1] ^ encoded[z-1]
    }
    return res
};

