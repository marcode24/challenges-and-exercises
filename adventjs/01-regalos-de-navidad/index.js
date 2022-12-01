function wrapping(gifts) {
  return gifts.map((gift) => {
    gift = gift.split("");
    const repeat = "*".repeat(gift.length + 2);
    return `${repeat}\n*${gift.join("")}*\n${repeat}`;
  });
} // --> 131 points

function wrapping(gifts) {
  return gifts.map((gift) => {
    const repeat = "*".repeat(gift.length + 2);
    return `${repeat}\n*${gift}*\n${repeat}`;
  });
} // -> 131 points

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped); // [ "******\n*book*\n******", "******\n*game*\n******", "*******\n*socks*\n*******" ]
