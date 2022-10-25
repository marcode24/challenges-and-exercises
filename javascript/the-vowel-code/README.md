# The Vowel Code

## Description

**Step 1:** Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

```bash
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
```

For example, `encode("hello")` would return `"h2ll4"`. There is no need to worry about uppercase vowels in this kata.

**Step 2:** Now create a function called `decode()` to turn the numbers back into vowels according to the same pattern shown above.

For example, `decode("h3 th2r2")` would return `"hi there"`.

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

## My solution

```js
const vowels = [
  { char: "a", value: 1, patternString: /a+/gi, patternNumber: /1+/g },
  { char: "e", value: 2, patternString: /e+/gi, patternNumber: /2+/g },
  { char: "i", value: 3, patternString: /i+/gi, patternNumber: /3+/g },
  { char: "o", value: 4, patternString: /o+/gi, patternNumber: /4+/g },
  { char: "u", value: 5, patternString: /u+/gi, patternNumber: /5+/g },
];

const encode = (str) => {
  vowels.forEach((vowel) => {
    if (str.includes(vowel.char) || str.includes(vowel.char.toUpperCase())) {
      str = replaceValue(str, vowel.patternString, vowel.value);
    }
  });
  return str;
};

const decode = (str) => {
  vowels.forEach((vowel) => {
    if (str.includes(vowel.value)) {
      str = replaceValue(str, vowel.patternNumber, vowel.char);
    }
  });
  return str;
};

const replaceValue = (str, pattern, newValue) => str.replace(pattern, newValue);

console.log(encode("hello")); // -> h2ll4
console.log(encode("How are you today?")); // -> H4w 1r2 y45 t4d1y
console.log(encode("This is and encoding test.")); // -> Th3s 3s 2nc4d3ng t2st
console.log(encode("This is an example of testing")); // -> Th3s 3s 2nc4d3ng t2st

console.log(decode("h2ll4")); // -> h2ll4
console.log(decode("H4w 1r2 y45 t4d1y?")); // -> How are you today?
console.log(decode("Th3s 3s 2nc4d3ng t2st.")); // -> This is and encoding test.
```
