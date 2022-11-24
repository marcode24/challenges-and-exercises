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
