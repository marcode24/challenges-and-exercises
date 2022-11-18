# Reto 2: !Atrapa a esos ciber criminales¡

## Problema

Un grupo de ciber criminales están usando mensajes encriptados para comunicarse. El FBI nos ha pedido ayuda para descifrarlos.

Los mensajes son cadenas de texto que incluyen números enteros muy largos y espacios en blanco. Aunque los números no parecen tener sentido... una chica llamada Alice ha descubierto que podrían usar el código ASCII de las letras en minúscula.

Con su método ha conseguido descifrar estos mensajes:

- "109105100117" -> midu
- "9911110010110998101114" -> codember
- "9911110010110998101114 109105100117" -> codember midu
- "11210897121 116101116114105115" -> play tetris

Pero han interceptado un mensaje más largo que no han podido y nos han dicho que es muy importante que lo descifremos:

**11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101**

**Pistas**

Recuerda que los mensajes son cadenas de texto conformadas por números y espacios en blanco.
Parece que los números tienen algo que ver con el código ASCII.
Los espacios en blanco parece que son simplemente espacios...

## Mi Solución

```js
const fs = require("fs");

const getSentence = (code) => {
  let sentence = "";
  code.split(" ").forEach((el) => {
    const numberASCII = [];
    let numberTemp = "",
      word = "";
    el.split("").forEach((item) => {
      numberTemp += item;
      if (Number(numberTemp) >= 97 && Number(numberTemp) <= 122) {
        numberASCII.push(numberTemp);
        numberTemp = "";
      }
    });
    numberASCII.forEach((item) => (word += String.fromCharCode(Number(item))));
    sentence += `${word} `;
  });
  return sentence.trim();
};

try {
  const code = fs.readFileSync(
    "./codember/02-atrapa-a-esos-ciber-criminales/encrypted.txt",
    "utf8"
  );
  const result = getSentence(code);
  console.log({ result });
} catch (e) {
  console.log("Error:", e.stack);
}

console.log(getSentence("109105100117")); // -> midu
console.log(getSentence("9911110010110998101114")); // -> codember
console.log(getSentence("9911110010110998101114 109105100117")); // -> codember midu
console.log(getSentence("11210897121 116101116114105115")); // -> play tetris
```
