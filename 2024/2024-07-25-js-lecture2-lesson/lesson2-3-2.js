let nums = [56, 78, 83, 64, 100, 87, 98, 43, 95, 83, 60, 74, 36];

let total = 0;

for (let index = 0; index < nums.length; index++) {
    total += nums[index];
}
console.log(total / nums.length);