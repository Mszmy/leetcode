var reverseParentheses = function(s) {
  //使用栈 先处理内层，再依次处理外层
  let stack = ['']
  for(let i=0;i<s.length;i++){
    let ch = s[i]
    if(ch === '('){
      stack.push('')
    }else if(ch === ')'){
      let str = stack.pop()
      let tmp = str.split('').reverse().join('')
      stack[stack.length-1] += tmp
    }else{
      stack[stack.length-1] += ch
    }
  }
  return stack.pop()
};
