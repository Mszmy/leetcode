var isPowerOfFour = function(n) {
    if(n == 1) return true
    return (/^10*$/g).test(n.toString(4))
};
