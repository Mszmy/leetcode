var isPalindrome = function(s) {
    // 先全部转换成小写，然后用正则表达式去除字符串中的空格，然后逆转字符串 与 原来的对比
    let st = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
    let strr = st.split('').reverse().join('')
    return (strr === st)
};
