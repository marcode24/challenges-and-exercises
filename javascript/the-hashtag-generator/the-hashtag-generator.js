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
