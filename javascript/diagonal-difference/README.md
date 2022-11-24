# Diagonal Difference

## Description

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix is shown below:

```txt
1 2 3
4 5 6
9 8 9
```

The left-to-right diagonal **= 1 + 5 + 9 = 15**. The right to left diagonal **= 3 + 5 + 9 + 17**. Their absolute difference is **|15 - 17| = 2**.

**Function description**

Complete the function in the editor below.

diagonalDifference takes the following parameter:

- int arr[n][m]: an array of integers

**Return**

- int: the absolute diagonal difference

**Input Format**

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next lines describes a row, , and consists of space-separated integers .

**Output Format**

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

**Sample Input**

```txt
3
11 2 4
4 5 6
10 8 -12
```

**Sample Output**

```txt
15
```

**Explanation**

The primary diagonal is:

```txt
11
   5
     -12
```

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

```txt
     4
   5
10
```

Sum across the secondary diagonal: 4 + 5 + 10 = 19

**Difference: |4 - 19| = 15**

## My Solution

```js
function diagonalDifference(arr) {
  const diagonals = [0, 0];
  for (let i = 0, j = arr.length; i < arr.length; i++) {
    diagonals[0] += arr[i][i];
    diagonals[1] += arr[i][j - i - 1];
  }
  return Math.abs(diagonals[1] - diagonals[0]);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
); // -> 2
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); // -> 15
console.log(diagonalDifference([[1]])); // -> 0
console.log(
  diagonalDifference([
    [1, 2],
    [3, 4],
  ])
); // -> 0
console.log(
  diagonalDifference([
    [23, -23, 3],
    [4, 5, 6],
    [10, 8, -12],
  ])
); // -> 2
```
