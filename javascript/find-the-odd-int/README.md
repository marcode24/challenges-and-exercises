# Find The Odd Int

## Description

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

- **[7]** should return 7, because it occurs 1 time (which is odd).
- **[0]** should return 0, because it occurs 1 time (which is odd).
- **[1,1,2]** should return 2, because it occurs 1 time (which is odd).
- **[0,1,0,1,0]** should return 0, because it occurs 3 times (which is odd).
- **[1,2,2,3,3,3,4,3,3,3,2,2,1]** should return 4, because it appears 1 time (which is odd).

## My Solution

```js
function findOdd(array) {
  if (array.length === 1) return array[0];
  const unique = [...new Set(array)];
  let odd;
  unique.forEach((num) => {
    const count = array.filter((n) => n === num).length;
    if (count % 2 !== 0) return (odd = num);
  });
  return odd;
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // -> 4
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -> -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // -> 5
console.log(findOdd([10])); // -> 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // -> 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // -> 1
```
