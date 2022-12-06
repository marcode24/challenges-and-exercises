# Numbers that are a power of their sum of digits

## Description

The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

8 + 1 = 9 and 92 = 81

512 = 5 + 1 + 2 = 8 and 83 = 512

We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

Examples (input --> output)

```txt
1 --> 81

2 --> 512
```

Happy coding!

## My Solution

```js
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
```
