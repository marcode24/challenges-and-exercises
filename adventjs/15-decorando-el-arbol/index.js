function decorateTree(base) {
  const decorators = {
    BB:"B",
    RR:"R",
    PP:"P",
    PR:"B",
    RP:"B",
    RB:"P",
    BR:"P",
    PB:"R",
    BP:"R",
  }
  const splitedBase = base.split(" ");
  const arr = []
  splitedBase.slice(0,-1).reduce((acc, _) => {
    acc = acc.slice(0,-1).map((_, i) => decorators[acc[i] + acc[i + 1]]);
    arr.unshift(acc.join(" "));
    return acc;
  }, splitedBase);
  return [...arr,base];
}

console.log(decorateTree('B P R P'));
// [
//    'R',
//   'P B',
//  'R B B',
// 'B P R P'
// ]
console.log(decorateTree('B B'));
// [
//  'B',
// 'B B'
// ]
console.log(decorateTree('B B P R P R R'));
// [
//       'B',
//      'R P',
//     'B P P',
//    'P R B R',
//   'P P B B P',
//  'B R B B B R',
// 'B B P R P R R'
// ]
console.log(decorateTree('R R P R R P P P'));
// [
//        'P',
//       'P P',
//      'P P P',
//     'R B R B',
//    'R R P B B',
//   'P B P P R P',
//  'R B B R B P P',
// 'R R P R R P P P'
// ]
