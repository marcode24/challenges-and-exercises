const duplicateCount = (text) => {
  const filteredElements = text
    .toLowerCase()
    .split("")
    .filter((item, index) => text.indexOf(item) !== index);
  return [...new Set(filteredElements)].length;
};

console.log(duplicateCount("")); // -> 0
console.log(duplicateCount("abcde")); // -> 0
console.log(duplicateCount("aabbcde")); // -> 2
console.log(duplicateCount("aabBcde")); // -> 2
console.log(duplicateCount("Indivisibility")); // -> 1
console.log(duplicateCount("Indivisibilities")); // -> 2
console.log(
  duplicateCount("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")
); // -> 26
