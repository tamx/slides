let nums = [56, 78, 83, 64, 100, 87, 98, 43, 95, 83, 60, 74, 36];

for (let count = 0; count < nums.length; count++) {
    for (let index = 1; index < nums.length; index++) {
        const a = nums[index - 1];
        const b = nums[index];
        if (a < b) {
            nums[index - 1] = b;
            nums[index] = a;
        }
    }
}

for (let index = 0; index < nums.length; index++) {
    console.log(nums[index]);
}