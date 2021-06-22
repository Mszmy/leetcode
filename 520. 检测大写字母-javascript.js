var detectCapitalUse = function(word) {
    // 检测全部大写 检测全部小写  检测只有首字母大写
    let len = word.length
    let p1 = word.match(/[A-Z]/g)
    let p2 = word.match(/[a-z]/g)
    let p3 = (/^[A-Z][a-z]*$/).test(word)
    let lenp1 = (p1 === null)?0:p1.length
    let lenp2 = (p2 === null)?0:p2.length
    return (lenp1===len || lenp2===len || p3)

};
