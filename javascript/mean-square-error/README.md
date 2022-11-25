# Mean Square Error

## Description

Complete the function that

- accepts two integer arrays of equal length
- compares the value each member in one array to the corresponding member in the other
- squares the absolute value difference between those two values
- and returns the average of those squared absolute value difference between each member pair.

**Examples**

```txt
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
```

## My Solution

```js
const meanSquareError = function (arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += Math.pow(arr1[i] - arr2[i], 2);
  }
  return sum / arr1.length;
};

console.log(meanSquareError([1, 2, 3], [4, 5, 6])); // -> 9
console.log(meanSquareError([10, 20, 10, 2], [10, 25, 5, -2])); // -> 16.5
console.log(meanSquareError([-1, 0], [0, -1])); // -> 1
```
