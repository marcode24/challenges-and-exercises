# Sum Strings as Numbers

## Description

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

```bash
sumStrings('1','2') // => '3'
```

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of `BigInteger` and `BigDecimal` in java

## My solution

```js
const sumStrings = (a, b) =>
  typeof parseFloat(a.replace("", "0")) === "number" &&
  typeof parseFloat(b.replace("", "0")) === "number"
    ? (BigInt(a.replace("", "0")) + BigInt(b.replace("", "0")))
        .toString()
        .replace("n", "")
    : "0";

console.log(sumStrings("123", "456")); // -> '579'
console.log(sumStrings("", "5")); // -> '5'

console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
); // -> '712577413488402631964821329'
```
