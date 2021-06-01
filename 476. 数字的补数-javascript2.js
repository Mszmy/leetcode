var findComplement = function(num) {
    var st = num.toString(2)
    st = st.replace(/1/g,2).replace(/0/g,1).replace(/2/g,0)
    return parseInt(st,2)
};
