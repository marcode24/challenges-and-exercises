const fs = require("fs");

const getSentence = (code) => {
  let sentence = "";
  code.split(" ").forEach((el) => {
    const numberASCII = [];
    let numberTemp = "",
      word = "";
    el.split("").forEach((item) => {
      numberTemp += item;
      if (Number(numberTemp) >= 97 && Number(numberTemp) <= 122) {
        numberASCII.push(numberTemp);
        numberTemp = "";
      }
    });
    numberASCII.forEach((item) => (word += String.fromCharCode(Number(item))));
    sentence += `${word} `;
  });
  return sentence.trim();
};

try {
  const code = fs.readFileSync(
    "./codember/02-atrapa-a-esos-ciber-criminales/encrypted.txt",
    "utf8"
  );
  const result = getSentence(code);
  console.log({ result });
} catch (e) {
  console.log("Error:", e.stack);
}

console.log(getSentence("109105100117")); // -> midu
console.log(getSentence("9911110010110998101114")); // -> codember
console.log(getSentence("9911110010110998101114 109105100117")); // -> codember midu
console.log(getSentence("11210897121 116101116114105115")); // -> play tetris
