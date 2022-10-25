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
