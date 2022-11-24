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
