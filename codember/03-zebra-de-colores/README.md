# La zebra de colores

## Problema

TMChein ya se está preparando para las fiestas y quiere empezar a decorar la casa con las luces de navidad.

Quiere comprar una pero sus favoritas son las que tienen dos colores que se van alternando. Como una zebra de dos colores.

Ha hecho que las luces sean Arrays y cada posición un color. Y quiere saber qué luces tienen las zebras más largas y cuál es el último color de esa sucesión de colores. Por ejemplo:

- ['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
- ['green', 'red', 'blue', 'gray'] -> 2, gray
- ['blue', 'blue', 'blue', 'blue'] -> 1, blue
- ['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
- ['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
- ['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
- ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green

Fíjate que sólo quiere saber la longitud de cuando dos colores se van alternando. Una vez que se rompe la alternancia de los dos colores, deja de contar.

Recuerda que una zebra de colores es cuando dos colores se alternan una y otra vez. Si se repite un color en la posición siguiente o es un tercer color, entonces se deja de contar.
Lo que queremos calcular es la tira de colores más larga en forma de zebra y el último color de esa tira de colores.

## Mi Solución

```js
const fs = require("fs");

const getMaxZebra = () => {
  const colors = JSON.parse(
    fs.readFileSync("./codember/03-zebra-de-colores/colors.txt", "utf8")
  );
  let maxZebra = 1;
  let actualZebra = 1;
  let lastColor = colors[0];

  colors.forEach((_, index) => {
    if (colors[index] === colors[index + 1]) return (actualZebra = 1);
    if (colors[index + 1] !== colors[index - 1]) return (actualZebra = 2);
    actualZebra++;

    if (actualZebra >= maxZebra) {
      maxZebra = actualZebra;
      lastColor = colors[index - 1];
    }
  });
  console.log(`${maxZebra}@${lastColor}`);
};

getMaxZebra(); // -> 30@red
```
