# Are they the "same"?

## Description

Given two arrays `a` and `b` write a function `comp(a, b)` (or `compSame(a, b)`) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

**Examples**

Valid arrays

```js
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
```

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:

```js
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
```

Invalid arrays

If, for example, we change the first number to something else, `comp` is not returning true anymore:

```js
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
```

`comp(a,b)` returns false because in b 132 is not the square of any number of `a`.

```js
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
```

`comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.

**Remarks**

- `a` or `b` might be `[] or {}` (all languages except R, Shell).
- `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If `a` or `b` are `nil` (or `null` or `None`, depending on the language), the problem doesn't make sense so return false.

**Note for C**

The two arrays have the same size `(> 0)` given as parameter in function `comp`.

## My Solution

```js
const comp = (array1, array2) => {
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length !== array2.length
  ) {
    return false;
  }
  if (array1.length === 0 && array1.length === 0) {
    return true;
  }
  let result = true;
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(Math.sqrt(array2[i]))) {
      result = false;
      break;
    } else {
      array1.splice(array1.indexOf(Math.sqrt(array2[i])), 1);
    }
  }
  return result;
};

console.log(comp([2, 2, 3], [4, 9, 9])); // -> false
console.log(
  comp(
    [9, 7, 6, 1, 9, 9, 9, 9, 7, 0, 7, 6, 1, 4, 2, 2, 5],
    [81, 36, 1, 81, 81, 0, 36, 4, 81, 16, 49, 81, 49, 4, 49, 1, 25]
  )
); // -> true
console.log(comp([10000000, 100000000], [100000000000000, 10000000000000000])); // -> true
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2)); // -> true
console.log(comp([], [])); // -> true
```
