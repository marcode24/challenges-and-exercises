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
