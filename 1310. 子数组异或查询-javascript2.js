var xorQueries = function(arr, queries) {
    const ret = new Uint32Array(queries.length);
    const map = new Map();
    // 复制原始数组，并按照左边界从小到大排序，如果左边界相同，再按照右边界从小到大排序
    // 使得所有的操作都在拷贝数组上进行，这样的可以保证最后的输出顺序与原始queries顺序相同
    const sorted = [...queries].sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let val = left = right = 0;
    for (let i = 0; i < sorted.length; ++i) {
        const start = sorted[i][0];
        const end = sorted[i][1];
        // 移动左边界
        while (left < start) val ^= arr[left++];
        // 移动右边界，需要区分两种情况，因为是基于左边界排序的，所以新的右边界可能比之前的右边界小
        while (right <= end) val ^= arr[right++];
        while (right > end + 1) val ^= arr[--right];

        map.set(left + '-' + (right - 1), val);
    }
    // 根据得到的map映射，去原始queries数组中获取到数据
    for (let i = 0; i < queries.length; ++i) {
        ret[i] = map.get(queries[i][0] + '-' + queries[i][1]);
    }
    return ret;
};
