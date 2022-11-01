Math.round = function (number) {
  const [numberSplitted, decimals = 0] = splitNumber(number);
  return Number(decimals) >= 0 && Number(decimals.toString().split("")[0]) < 5
    ? numberSplitted
    : numberSplitted + 1;
};

Math.ceil = function (number) {
  const [numberSplitted, decimals = 0] = splitNumber(number);
  return decimals > 0 ? numberSplitted + 1 : numberSplitted;
};

Math.floor = function (number) {
  const [numberSplitted, decimals = 0] = splitNumber(number);
  return decimals >= 0 ? numberSplitted : numberSplitted - 1;
};

const splitNumber = (number) =>
  number
    .toString()
    .split(".")
    .map((item) => Number(item));

console.log(Math.round(0.0)); // -> 0
console.log(Math.round(1.55)); // -> 2
console.log(Math.round(1)); // -> 1
console.log(Math.round(0.01)); // -> 0
console.log(Math.round(0.99)); // -> 1
console.log(Math.round(9.99)); // -> 10
console.log(Math.round(0.4)); // -> 0

console.log(Math.ceil(0.0)); // -> 0
console.log(Math.ceil(1.5)); // -> 2
console.log(Math.ceil(1)); // -> 1
console.log(Math.ceil(0.01)); // -> 1
console.log(Math.ceil(0.99)); // -> 1

console.log(Math.floor(0.0)); // -> 0
console.log(Math.floor(1.5)); // -> 1
console.log(Math.floor(1)); // -> 1
console.log(Math.floor(0.01)); // -> 0
console.log(Math.floor(0.99)); // -> 0
console.log(Math.floor(9.99)); // -> 9
