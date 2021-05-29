/*每一位只有可能是0或者1，00和11的汉明距离都是0，所以对任意一位的汉明距离和就是当前位置0的数量 * 1的数量
遍历32位，每次遍历开始时把当前的0和1的计数器清0
将每一位的结果累加到res，就能得到最终结果*/
var totalHammingDistance = function(nums) {
    let res = 0;
    for (let i = 0; i < 32; ++i) {
        let zero = 0, one = 0;
        for (let n of nums) {
            let bit = (n >> i) & 1;
            (bit === 1) ? one++ : zero++;
        }
        res += zero * one;
    }
    return res;
};
