var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0, count = 0;
    for (let i of nums) {
        if (i === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
};
//okk
