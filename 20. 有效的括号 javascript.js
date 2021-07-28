var isValid = function(s) {
    // 栈
    const stack = [];
    for (let val of s) {
        console.log(stack)
        if (val === '(') stack.push(')');
        else if (val === '[') stack.push(']');
        else if (val === '{') stack.push('}');
        else if (stack.length === 0 || val !== stack.pop()) return false;
    }
    return stack.length === 0;

};
