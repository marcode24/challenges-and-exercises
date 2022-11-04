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
