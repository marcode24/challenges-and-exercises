const comp = (array1, array2) => {
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length !== array2.length
  ) {
    return false;
  }
  if (array1.length === 0 && array1.length === 0) {
    return true;
  }
  let result = true;
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(Math.sqrt(array2[i]))) {
      result = false;
      break;
    } else {
      array1.splice(array1.indexOf(Math.sqrt(array2[i])), 1);
    }
  }
  return result;
};

console.log(comp([2, 2, 3], [4, 9, 9])); // -> false
console.log(
  comp(
    [9, 7, 6, 1, 9, 9, 9, 9, 7, 0, 7, 6, 1, 4, 2, 2, 5],
    [81, 36, 1, 81, 81, 0, 36, 4, 81, 16, 49, 81, 49, 4, 49, 1, 25]
  )
); // -> true
console.log(comp([10000000, 100000000], [100000000000000, 10000000000000000])); // -> true
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2)); // -> true
console.log(comp([], [])); // -> true
