function findPassword() {
  let results = [];
  for (let i = 11098; i <= 98123; i++) {
    let indexTemp = String(i);
    if (
      indexTemp.split("").filter((el) => Number(el) === 5).length >= 2 &&
      !greaterOrEqual(indexTemp)
    ) {
      results.push(i);
    }
  }
  console.log(`submit ${results.length}-${results.at(55)}`);
}

function greaterOrEqual(num) {
  let result = false;
  num = num.split("");
  for (let i = 0; i < num.length - 1; i++) {
    if (Number(num[i]) <= Number(num[i + 1])) {
      result = false;
    } else {
      result = true;
      break;
    }
  }
  return result;
}

findPassword(); // -> submit 165-23555
