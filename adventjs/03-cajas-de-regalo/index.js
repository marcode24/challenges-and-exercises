const distributeGifts = (packOfGifts, reindeers) => {
  return Math.floor(
    (reindeers.join("").length * 2) / packOfGifts.join("").length
  );
};

function distributeGifts2(packOfGifts, reindeers) {
  let gifts = 0,
    reindeersWeight = 0;
  packOfGifts.map((gift) => (gifts += gift.length));
  reindeers.map((reindeer) => (reindeersWeight += reindeer.length * 2));
  return Math.floor(reindeersWeight / gifts);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

console.log(distributeGifts(packOfGifts, reindeers)); // -> 2
console.log(distributeGifts(["a", "b", "c"], ["d", "e"])); // -> 1
console.log(distributeGifts(["videogames", "console"], ["midu"])); // -> 0
console.log(
  distributeGifts(
    ["game", "videoconsole", "computer"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  )
); // -> 5
console.log(
  distributeGifts(
    ["music"],
    [
      "midudev",
      "pheralb",
      "codingwithdani",
      "carlosble",
      "blasco",
      "facundocapua",
      "madeval",
      "memxd",
    ]
  )
); // -> 26
