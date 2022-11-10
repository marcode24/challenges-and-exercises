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
