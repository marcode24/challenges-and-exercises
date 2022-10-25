# The Hashtag Generator

## Description

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (`#`).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return `false`.
- If the input or the result is an empty string it must return `false`.

Examples

```bash
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false
```

## My solution

```js
const generateHashtag = (str) => {
  str = str.replace(/\s+/g, " ").trim();
  if (str.length < 140 && str.length > 0) {
    str = str.split(" ");
    const newStr = [];
    for (const word of str) {
      const result = capitalize(word);
      newStr.push(result);
    }
    return `#${newStr.join("")}`;
  }
  return false;
};

const capitalize = (str) => {
  str = str.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
};

console.log(generateHashtag("hola mundo")); // -> #HolaMundo
console.log(generateHashtag("hola mundo fasdfa")); // -> #HolaMundoFasdfa
console.log(generateHashtag("este es un ejemplo")); // -> #EsteEsUnEjemplo
console.log(generateHashtag("   saHola     Mundo    ")); // -> #SaHolaMundo
console.log(generateHashtag("")); // -> false
console.log(generateHashtag(" ")); // -> false
```
