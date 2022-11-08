const rules = {
  '1s': 1000,
  '2s': 200,
  '3s': 300,
  '4s': 400,
  '5s': 500,
  '6s': 600,
  '1': 100,
  '5': 50,
};
function score(dice) {
  let result = 0;
  const rulesArray = Object.keys(rules);
  for(let i = 1; i < 7; i++) {
    if(dice.includes(i)) {
      let totalElements = dice.filter(item => item === i).length;
      if(i === 1) result += resultTemp(totalElements, rulesArray[2], rulesArray[0]);
      if(i === 5) result += resultTemp(totalElements, rulesArray[6], rulesArray[1]);
      if(i === 2 && totalElements >= 3) result += resultTemp(totalElements, rulesArray[3]);
      if(i === 3 && totalElements >= 3) result += resultTemp(totalElements, rulesArray[4]);
      if(i === 4 && totalElements >= 3) result += resultTemp(totalElements, rulesArray[5]);
      if(i === 6 && totalElements >= 3) result += resultTemp(totalElements, rulesArray[7]);
    }
  }
  return result;
};

function resultTemp (totalElements, firstRule, secondRule) {
  let result = 0;
  if(totalElements >= 3) {
    result += rules[firstRule]; // -> '1s' | '2s'...
    totalElements -= 3;
  }
  if(secondRule) {
    result += rules[secondRule] * totalElements;
  }
  return result;
}

console.log(score( [2, 3, 4, 6, 2])); // -> 0
console.log(score([ 1, 1, 2, 2, 2])); // -> 400
console.log(score([4, 4, 4, 3, 3])); // -> 400
console.log(score( [2, 4, 4, 5, 4])); // -> 450
console.log(score( [2, 4, 4, 5, 4])); // -> 450
console.log(score( [1, 1, 1, 1, 3])); // ->  1100
console.log(score( [1, 1, 1, 1, 5])); // -> 1150
console.log(score( [2, 4, 4, 5, 4])); // -> 450
console.log(score( [3, 4, 5, 3, 3])); // -> 350
console.log(score( [1, 5, 1, 3, 4])); // ->  250
