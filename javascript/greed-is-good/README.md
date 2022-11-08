# Greed is Good

## Description

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

```text
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point
````
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

```text
Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

## My Solution

```js
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

```