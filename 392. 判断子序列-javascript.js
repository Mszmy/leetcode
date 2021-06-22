var isSubsequence = function(s, t) {
    if (s.length === 0) {
      return true;
    }
    let index = t.indexOf(s[0]);
    if (index == -1) {
      return false;
    }
    s = s.slice(1)
    t = t.slice(index + 1)
    return isSubsequence(s, t)
};
