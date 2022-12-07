// function getGiftsToRefill2(a1, a2, a3) {
//   a1 = [...new Set(a1)];
//   a2 = [...new Set(a2)];
//   a3 = [...new Set(a3)];
//   const res = a1.concat(a2, a3).reduce((acc, curr) => {
//     if (acc[curr]) {
//       acc[curr]++;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, []);
//   return Object.keys(res).filter((key) => res[key] === 1);
// }

function getGiftsToRefill(a1, a2, a3) {
  return [...new Set(a1.concat(a2, a3))].filter(
    (item) => a1.includes(item) + a2.includes(item) + a3.includes(item) < 2
  );
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];
console.log(getGiftsToRefill(a1, a2, a3)); // -> ['muñeca', 'pc']
console.log(getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"])); // -> ['a', 'b', 'c']
console.log(getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"])); // -> []
