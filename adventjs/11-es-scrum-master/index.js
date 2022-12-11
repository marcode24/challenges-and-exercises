function getCompleted(part, total) {
  const MCD = (a, b) => {
    let temp;
    while (b !== 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  const [numerator, denominator] = [part, total]
    .map(time => time.split(':')
    .reduce((acc, curr) => acc * 60 + +curr, 0));
  const mcdResult = MCD(numerator, denominator);
  return `${numerator/mcdResult}/${denominator/mcdResult}`;
}

console.log(getCompleted('01:00:00', '03:00:00')) // -> '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // -> '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // -> '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // -> '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // -> '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // -> '3/5
