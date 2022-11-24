# Plus Minus

## Description

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with **6** places after the decimal.

**Example**

arr = [1,1,0,-1,-1];

There are **n = 5** elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000 Results are printed as:

```txt
0.400000
0.400000
0.200000
```

## My Solution

```js
function plusMinus(arr) {
  const arrLength = arr.length;
  let positives = 0,
    negatives = 0,
    zeros = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }
  console.log((positives / arrLength).toFixed(6));
  console.log((negatives / arrLength).toFixed(6));
  console.log((zeros / arrLength).toFixed(6));
  return [positives, negatives, zeros].map((item) =>
    (item / arrLength).toFixed(6)
  );
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1])); // -> [0.500000, 0.333333, 0.166667]
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])); // -> [0.375000, 0.375000, 0.250000]
```
