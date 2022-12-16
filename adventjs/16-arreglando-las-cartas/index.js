function fixLetter(letter) {
  return letter
    .trim()
    .replace(/([.,?!\s])(?=\1)/g, "")
    .replace(/\s+([.,?!])/g, "$1")
    .replace(/\b([.?!] \w)|(^\w)/g, match => match.toUpperCase())
    .replace(/^.*\w$/, match => `${match}.`)
    .replace(/santa claus/ig, 'Santa Claus')
}

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `));
// -> Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"));
// -> Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(fixLetter("  hi    santa    claus ??"));
// -> Hi Santa Claus?

console.log(fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! "));
// -> Hey Santa Claus. I want a bike. I want a videogame!

console.log(fixLetter("  hi    santa    claus . santa claus is the best  "));
// -> Hi Santa Claus. Santa Claus is the best.
