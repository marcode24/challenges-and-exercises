const fs = require("fs");

const getMaxZebra = () => {
  const colors = JSON.parse(
    fs.readFileSync("./codember/03-zebra-de-colores/colors.txt", "utf8")
  );
  let maxZebra = 1;
  let actualZebra = 1;
  let lastColor = colors[0];

  colors.forEach((_, index) => {
    if (colors[index] === colors[index + 1]) return (actualZebra = 1);
    if (colors[index + 1] !== colors[index - 1]) return (actualZebra = 2);
    actualZebra++;

    if (actualZebra >= maxZebra) {
      maxZebra = actualZebra;
      lastColor = colors[index - 1];
    }
  });
  console.log(`${maxZebra}@${lastColor}`);
};

getMaxZebra(); // -> 30@red
