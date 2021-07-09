var convertToTitle = function(n) {
    let arr = ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    // 如果小于26 则直接返回数组对英字母
    if(n<=26)return arr[n]
    let i = ''
    let res = ''
    while(n>26){
        i = arr[n%26]
        n = Math.ceil(n/26) - 1
        res = i + res
    }
    res = arr[n] + res
    return res
};
