const createPhoneNumber = (numbers) => {
  const firstPart = [];
  const secondPart = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i <= 2) {
      firstPart.push(numbers[i]);
      continue;
    }
    secondPart.push(i === 5 ? `${numbers[i]}-` : numbers[i]);
  }
  return `(${firstPart.join("")}) ${secondPart.join("")}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -> '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // -> '(111) 111-1111';
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -> '(123) 456-7890';
