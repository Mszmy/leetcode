var firstUniqChar = function(s) {
    // 将字符串都遍历一遍，统计次数并放入对象中，最后返回次数为1的index
    var obj = {}
    var arr = s.split('')
    for(var word of arr){
        if(word in obj)obj[word] +=1
        else obj[word] = 1
    }
    for(var j in obj){
        if(obj[j] == 1){
            return arr.indexOf(j)
        }
    }
    return -1
};
