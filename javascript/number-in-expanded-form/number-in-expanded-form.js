const expandedForm = (num) => {
  num = num.toString().split('').reverse();
  let results = [];
  num.forEach((item, index) => {
    if(item !== '0') {
      results.push(`${item}${'0'.repeat(index)}`);
    }
  })
  return results.reverse().join(' + ');
}

console.log(expandedForm(12)); // -> 10 + 2
console.log(expandedForm(42)); // -> 40 + 2
console.log(expandedForm(70304)); // -> 70000 + 300 + 4
console.log(expandedForm(10345354)); // -> 10000000 + 300000 + 40000 + 5000 + 300 + 50 + 4
