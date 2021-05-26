var plusOne = function(digits) {
    let len = digits.length
    let last = digits[len - 1] - 0
    if (last === 9) {
        let arr = plusOne(digits.slice(0, len - 1))
        arr.push(0)
        if (len === 1) arr.unshift(1)
        return arr
    } else {
        digits[len - 1] = last + 1
    }
    return digits
};
