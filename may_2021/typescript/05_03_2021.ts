function runningSum(nums: number[]): number[] {
    const res = Array(nums.length);
    res[0] = nums[0];
    for (let i = 1; i < res.length; i++) {
        res[i] = res[i - 1] + nums[i];
    }
    return res;
};