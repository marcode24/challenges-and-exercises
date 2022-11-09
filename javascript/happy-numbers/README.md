# Happy Numbers

## Description

A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are **happy numbers**, while those that do not end in 1 are unhappy numbers (or sad numbers).

Write a function that takes n as parameter and return `true` if and only if `n` is an happy number, `false` otherwise.

Examples
For example number `7` is happy because after a number of steps the computed sequence ends up with a 1: `7, 49, 97, 130, 10, 1`

While `3` is not, and would give us an infinite sequence: `3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...`

Happy coding!

## My Solution

```js
const isHappy = (n) => {
  let isHappy = true;
  if(n > 1) {
    n = n.toString().split('').map(Number);
    const numbersResult = [];
    let multplyResult;
    do {
      multplyResult = 0;
      n.forEach(num => multplyResult += Math.pow(num, 2));
      if(numbersResult.includes(multplyResult)) {
        isHappy = false;
        break;
      }
      numbersResult.push(multplyResult);
      n = multplyResult.toString().split('').map(Number);
    } while(multplyResult !== 1);
  }
  return isHappy;
};

console.log(isHappy(7)); // -> true
console.log(isHappy(1)); // -> true
console.log(isHappy(3)); // -> false

```