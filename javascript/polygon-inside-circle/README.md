# Calculate the Area of a Regular n Sides Polygon Inside a Circle of Radius r

## Description

Write the following function:

```js
function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
```

It should calculate the area of a regular polygon of `numberOfSides`, `number-of-sides`, or `number_of_sides` sides inside a circle of radius `circleRadius`, `circle-radius`, or `circle_radius` which passes through all the vertices of the polygon (such circle is called **circumscribed** circle or **circumcircle**). The answer should be a number rounded to 3 decimal places.

Input :: Output Examples

```js
areaOfPolygonInsideCircle(3, 3); // returns 11.691

areaOfPolygonInsideCircle(5.8, 7); // returns 92.053

areaOfPolygonInsideCircle(4, 5); // returns 38.042
```

**Note:** if you need to use Pi in your code, use the native value of your language unless stated otherwise.

## My Solution

```js
const areaOfPolygonInsideCircle = (cRadius, nSides) => {
  const angle = (180 * (nSides - 2)) / nSides / 2;
  const apotema = cRadius * Math.sin(Math.PI * (angle / 180));
  const side = cRadius * Math.cos(Math.PI * (angle / 180)) * 2;
  const area = (nSides * side * apotema) / 2;
  return Number(area.toFixed(3));
};

console.log(areaOfPolygonInsideCircle(5.8, 7)); // -> 92.053
console.log(areaOfPolygonInsideCircle(3, 3)); // -> 11.691
console.log(areaOfPolygonInsideCircle(4, 5)); // -> 38.042
console.log(areaOfPolygonInsideCircle(2, 4)); // -> 8
console.log(areaOfPolygonInsideCircle(2.5, 5)); // -> 14.86
```
