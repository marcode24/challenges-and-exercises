const upArray = (arr) => {
  if (
    !arr.every(isSingleDigitAndNonNegative) ||
    !Array.isArray(arr) ||
    arr.length === 0
  ) {
    return null;
  }
  recursivity(arr, 1);
  return arr;
};

const isSingleDigitAndNonNegative = (el) =>
  el.toString().match(/\b\d\b/) && el >= 0;

const recursivity = (arr, position) => {
  const currentElement = arr[arr.length - position] + 1;
  if (currentElement > 9 && position !== arr.length) {
    arr[arr.length - position] = 0;
    recursivity(arr, position + 1);
  } else if (currentElement > 9 && position === arr.length) {
    arr[arr.length - position] = 0;
    arr.unshift(1);
  } else {
    arr[arr.length - position] = currentElement;
  }
  return arr;
};

console.log(upArray([9, 9, 9, 9])); // -> [ 1, 0, 0, 0, 0 ]
console.log(upArray([4, 3, 2, 5])); // -> [ 4, 3, 2, 6 ]
console.log(upArray([1, 2, 3, 9])); // -> [ 1, 2, 4, 0 ]
console.log(upArray([9, 9, 9, 9])); // -> [ 1, 0, 0, 0, 0 ]
console.log(upArray([0, 1, 3, 7])); // -> [ 0, 1, 3, 8 ]
console.log(upArray([1, 2, 3, 4, 5, 6, 8, 9, 0])); // -> [1, 2, 3, 4, 5,6, 8, 9, 1 ]
console.log(upArray([9, 9])); // -> [ 1, 0, 0]
console.log(upArray([])); // -> null
console.log(upArray([1, -9])); // -> null
console.log(upArray([1, 2, 33])); // -> null
