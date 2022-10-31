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
