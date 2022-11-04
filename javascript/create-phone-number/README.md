# Create Phone Number

## Description

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

**Example**

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

## My Solution

```js
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
```
