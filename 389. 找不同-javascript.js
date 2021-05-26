var findTheDifference = function(s, t) {
    // 将unicode编码进行累加，然后相减，得到的绝对值对应的就是添加进去的一个
    var sum = 0
    var sum1 =0
    for(var i=0;i<t.length;i++){
        sum += t.charCodeAt(i)
    }
    for(var j=0;j<s.length;j++){
        sum1 += s.charCodeAt(j)
    }
    return String.fromCharCode(sum-sum1)
};
//https://leetcode-cn.com/problems/find-the-difference/solution/wei-ji-shu-wei-yi-lei-jia-ti-huan-sort1x-s0li/
