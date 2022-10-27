# Make the Deadfish Swim

## Description

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

- `i` increments the value (initially `0`)
- `d` decrements the value
- `s` squares the value
- `o` outputs the value into the return array
  Invalid characters should be ignored.

```bash
parse("iiisdoso") => [ 8, 64 ]
```

## My solution

```js
const parse = (data) => {
  const output = [];
  let resultTemp = 0;
  data.split("").forEach((item) => {
    if (item === "i") resultTemp += 1;
    if (item === "d") resultTemp -= 1;
    if (item === "s") resultTemp *= resultTemp;
    if (item === "o") output.push(resultTemp);
  });
  return output;
};

console.log(parse("iiisdoso")); // -> [ 8, 64 ]
console.log(parse("iiisxxxdoso")); // -> [ 8, 64 ]
```
