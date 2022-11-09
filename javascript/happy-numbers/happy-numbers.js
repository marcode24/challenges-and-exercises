const isHappy = (n) => {
  let isHappy = true;
  if(n > 1) {
    n = n.toString().split('').map(Number);
    const numbersResult = [];
    let multplyResult;
    do {
      multplyResult = 0;
      n.forEach(num => multplyResult += Math.pow(num, 2));
      if(numbersResult.includes(multplyResult)) {
        isHappy = false;
        break;
      }
      numbersResult.push(multplyResult);
      n = multplyResult.toString().split('').map(Number);
    } while(multplyResult !== 1);
  }
  return isHappy;
};

console.log(isHappy(7)); // -> true
console.log(isHappy(1)); // -> true
console.log(isHappy(3)); // -> false
