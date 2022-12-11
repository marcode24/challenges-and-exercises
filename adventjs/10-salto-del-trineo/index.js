function checkJump(heights) {
  const dictionary = { '0':'', '-1':'d', '1':'u' }; // -1: down, 0: same, 1: up
  const str = heights.slice(1).reduce((acc, curr, i) =>
    acc + dictionary[Math.sign(curr - heights[i])], '');
  return !!str.match(/^[u]+[d]+$/g);
}

console.log(checkJump([1, 3, 8, 5, 2])); // -> true
console.log(checkJump([1, 7, 3, 5])); // -> false
console.log(checkJump([1, 2, 1])); // -> true
console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])); // -> true
console.log(checkJump([1, 2, 3, 1, 3, 1])); // -> false
console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1])) // -> true
