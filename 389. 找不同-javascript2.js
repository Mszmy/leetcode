var findTheDifference = function(s, t) {
    //将两个字符串拼接在一起判断每个字母的个数,如果为奇数个，则证明是新添加进去的字母
    var st = s + t
    for(var i=0;i<t.length;i++){
        if(st.match(new RegExp(t[i],'g')).length & 1)return t[i]
    }
};
