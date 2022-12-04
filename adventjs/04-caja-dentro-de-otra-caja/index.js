function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) => {
      const beforeBox = boxes[i - 1];
      return (
        i === 0 ||
        (box.l > beforeBox.l && box.w > beforeBox.w && box.h > beforeBox.h)
      );
    });
}

console.log(
  fitsInOneBox([
    { l: 2, w: 2, h: 2 },
    { l: 1, w: 1, h: 1 },
  ])
); // -> true

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
  ])
); // -> false

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ])
); // -> true

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
    { l: 4, w: 4, h: 4 },
  ])
); // -> true

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ])
); // -> false
