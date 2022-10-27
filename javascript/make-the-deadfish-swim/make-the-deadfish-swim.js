const parse = (data) => {
  const output = [];
  let resultTemp = 0;
  data.split("").forEach((item) => {
    if (item === "i") resultTemp += 1;
    if (item === "d") resultTemp -= 1;
    if (item === "s") resultTemp *= resultTemp;
    if (item === "o") output.push(resultTemp);
  });
  return output;
};

console.log(parse("iiisdoso")); // -> [ 8, 64 ]
console.log(parse("iiisxxxdoso")); // -> [ 8, 64 ]
