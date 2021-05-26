var deleteAndEarn = function(nums) {
    const max = Math.max(...nums);
    const arr = new Array(max + 1).fill(0);
    for (let num of nums) {
        arr[num] += num;
        // console.log(arr)
    }
    // console.log(arr)
    const dp = new Array(max + 1);
    dp[0] = arr[0];
    dp[1] = arr[1];
    for (let i = 2; i < max + 1; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }
    // console.log(dp)
    return dp[max];
};
