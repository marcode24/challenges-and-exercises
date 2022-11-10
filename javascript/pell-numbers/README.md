# Pell Numbers

## Description

The Pell sequence is the sequence of integers defined by the initial values

```text
P(0) = 0, P(1) = 1
```

and the recurrence relation

```text
P(n) = 2 * P(n-1) + P(n-2)
```
The first few values of P(n) are

```
0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ...
```
**Task**

Your task is to write a method that returns nth Pell number

## My Solution

```js
const pell = n => {
  if (n <= 2) return n;
  let a = 1, b = 2, c;
  for (let i = 3; i <= n; i++) {
      c = BigInt(BigInt(2) * BigInt(b) + BigInt(a));
      a = BigInt(b);
      b = BigInt(c);
  }
  return (b);
}

console.log(pell(1)); // -> 1
console.log(pell(2)); // -> 2
console.log(pell(5)); // -> 29n
console.log(pell(7)); // -> 169n
console.log(pell(100)); // -> 66992092050551637663438906713182313772n

```