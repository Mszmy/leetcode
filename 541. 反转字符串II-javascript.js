var reverseStr = function(s, k) {
    let n = 0, result = '';
    for (let i = 0; i < s.length; i+=k) {
        let st = s.slice(i, i+k);
        n++;
        if (n%2 === 1) {
            st = st.split('').reverse().join('');
        }
        result = result + st;
    }
    return result;
};
