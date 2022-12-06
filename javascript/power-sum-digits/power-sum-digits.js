function powerSumDigTerm(n) {
  const arr = [];
  for (let i = 2; i < 100; i++) {
    for (let j = 2; j < 10; j++) {
      const num = Math.pow(i, j);
      const sum = num
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b), 0);
      if (sum == i) arr.push(num);
    }
  }
  arr.sort((a, b) => a - b);
  return arr[n - 1];
}

console.log(powerSumDigTerm(1)); // -> 81
console.log(powerSumDigTerm(2)); // -> 512
console.log(powerSumDigTerm(3)); // -> 2401
console.log(powerSumDigTerm(4)); // -> 4913
console.log(powerSumDigTerm(5)); // -> 5832
