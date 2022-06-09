const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum(60, 40)); // 100
console.log(sum(27, 12, 38, 46, 930, 30)); // 1083
