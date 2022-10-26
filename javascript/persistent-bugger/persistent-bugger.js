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
