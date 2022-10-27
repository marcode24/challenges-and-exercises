# Extract the Domain Name From a URL

## Description

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```bash
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = "cnet"
```

## My solution

```js
function domainName(url) {
  const matches = url.match(/^(https?\:\/\/(www\.)?|www\.)?([^\/]+)/i);
  const domain = matches && matches[3].split(".")[0];
  return domain;
}

console.log(domainName("http://google.com")); // -> google
console.log(domainName("www.xakep.ru")); // -> xakep
console.log(domainName("https://youtube.com")); // -> youtube
console.log(domainName("http://www.a7n8qougog9.io/error")); // -> a7n8qougog9
console.log(domainName("rmr-w978s2-n60x.jp/index.php")); // -> rmr-w978s2-n60x
console.log(domainName("http://www.j-a3v2hb4sb7ys4uov8u8l.info")); // -> j-a3v2hb4sb7ys4uov8u8l
```
