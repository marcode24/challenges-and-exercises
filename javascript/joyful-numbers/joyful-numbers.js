function numberJoy(n) {
  const numberInitial = n;
  n = n.toString().split("");
  const result = n.reduce((acc, curr) => +acc + +curr, 0);
  const resultReverse = Number(result.toString().split("").reverse().join(""));
  return result * resultReverse === numberInitial;
}

console.log(numberJoy(1997)); // -> false
console.log(numberJoy(1998)); // -> false
console.log(numberJoy(1729)); // -> true
console.log(numberJoy(1)); // -> true
console.log(numberJoy(18)); // -> false
console.log(numberJoy(81)); // -> true
console.log(numberJoy(1458)); // -> true
