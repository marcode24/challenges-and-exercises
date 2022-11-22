# Reto 4: Encuentra la contraseña de tu amigo

## Problema

Un amigo compró 5 BitCoins en 2008. El problema es que lo tenía en un monedero digital... ¡y no se acuerda de la contraseña!

Nos ha pedido ayuda. Y nos ha dado algunas pistas:

- Es una contraseña de 5 dígitos.
- La contraseña tenía el número 5 repetido dos veces.
- El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.

Nos ha puesto algunas ejemplos:
55678 es correcto lo cumple todo
12555 es correcto, lo cumple todo
55555 es correcto, lo cumple todo
12345 es incorrecto, no tiene el 5 repetido.
57775 es incorrecto, los números no van de forma creciente

Dice que el password está entre los números 11098 y 98123. ¿Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?

## Mi Solución

```js
function findPassword() {
  let results = [];
  for (let i = 11098; i <= 98123; i++) {
    let indexTemp = String(i);
    if (
      indexTemp.split("").filter((el) => Number(el) === 5).length >= 2 &&
      !greaterOrEqual(indexTemp)
    ) {
      results.push(i);
    }
  }
  console.log(`submit ${results.length}-${results.at(55)}`);
}

function greaterOrEqual(num) {
  let result = false;
  num = num.split("");
  for (let i = 0; i < num.length - 1; i++) {
    if (Number(num[i]) <= Number(num[i + 1])) {
      result = false;
    } else {
      result = true;
      break;
    }
  }
  return result;
}

findPassword(); // -> submit 165-23555
```
