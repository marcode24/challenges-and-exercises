# Persistent Bugger

## Description

Write a function, `persistence`, that takes in a positive parameter `num` and returns its multiplicative persistence, which is the number of times you must multiply the digits in `num` until you reach a single digit.

For example **(Input --> Output):**

```bash
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

## My solution

```js
const persistence = (num) => {
  let timesMultiplied = 0;
  let numbers = num.toString().split("");
  while (numbers.length > 1) {
    let resultTemp = 1;
    numbers.forEach((item) => (resultTemp *= Number(item)));
    timesMultiplied++;
    numbers = resultTemp.toString().split("");
  }
  return timesMultiplied;
};

console.log(persistence(39)); // -> 3
console.log(persistence(999)); // -> 4
console.log(persistence(4)); // -> 0
console.log(persistence(12380)); // -> 1
console.log(persistence(9689313)); // -> 5
console.log(persistence(78)); // -> 3
console.log(persistence(6827174)); // -> 6
```
