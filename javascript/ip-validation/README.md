# IP Valitation

## Description

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

**Valid inputs examples:**

```txt
Examples of valid inputs:
1.2.3.4
123.45.67.89
```

**Invalid input examples:**

```txt
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

**Notes:**

Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

## My Solution

```js
function isValidIP(str) {
  const regexIP = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
  return regexIP.test(str);
}

console.log(isValidIP("0.0.0.0")); // ->  true
console.log(isValidIP("12.255.56.1")); // ->  true
console.log(isValidIP("137.255.156.100")); // ->  true
console.log(isValidIP("")); // -> false
console.log(isValidIP("12.def.ghi.jkl")); // -> false
console.log(isValidIP("123.456.789.0")); // -> false
console.log(isValidIP("12.34.56")); // -> false
console.log(isValidIP("01.02.03.04")); // -> false
console.log(isValidIP("256.1.2.3")); // -> false
console.log(isValidIP("1.2.3.4.5")); // -> false
console.log(isValidIP("123,45,67,89")); // -> false
console.log(isValidIP("1e0.1e1.1e2.2e2")); // -> false
console.log(isValidIP(" 1.2.3.4")); // -> false
```
