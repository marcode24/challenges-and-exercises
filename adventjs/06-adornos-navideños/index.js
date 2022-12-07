function createCube(size) {
  let topSide = [];
  let bottomSide = [];
  for (let i = 1; i <= size; i++) {
    topSide.push(" ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size));
    bottomSide.push(" ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size));
  }
  return topSide.concat(bottomSide.reverse()).join("\n");
}

function createCube2(size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    const spaces = " ".repeat(size - i - 1);
    result.push(spaces + "/\\".repeat(i + 1) + "_\\".repeat(size) + "\n");
  }
  for (let i = size; i > 0; i--) {
    const spaces = " ".repeat(size - i);
    const breakLine = size === 1 || i === 1 ? "" : "\n";
    result.push(spaces + "\\/".repeat(i) + "_/".repeat(size) + breakLine);
  }
  return result.join("");
}

console.log(createCube(10));
//          /\_\_\_\_\_\_\_\_\_\_\
//         /\/\_\_\_\_\_\_\_\_\_\_\
//        /\/\/\_\_\_\_\_\_\_\_\_\_\
//       /\/\/\/\_\_\_\_\_\_\_\_\_\_\
//      /\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//     /\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//    /\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//   /\/\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
//  /\/\/\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
// /\/\/\/\/\/\/\/\/\/\_\_\_\_\_\_\_\_\_\_\
// \/\/\/\/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//  \/\/\/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//   \/\/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//    \/\/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//     \/\/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//      \/\/\/\/\/_/_/_/_/_/_/_/_/_/_/
//       \/\/\/\/_/_/_/_/_/_/_/_/_/_/
//        \/\/\/_/_/_/_/_/_/_/_/_/_/
//         \/\/_/_/_/_/_/_/_/_/_/_/
//          \/_/_/_/_/_/_/_/_/_/_/

console.log(createCube(3));
//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/

console.log(createCube(1));
// /\_\
// \/_/

console.log(createCube(2));
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/
