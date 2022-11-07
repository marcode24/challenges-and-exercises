const reverse = str => {
  str = str.trim().split(' ');
  for(let i = 1; i < str.length; i += 2) {
    str[i] = str[i].split('').reverse().join('');
  }
  return str.join(' ');
}

console.log(reverse("Did it work?")); // -> Did ti work?
console.log(reverse("I really hope it works this time...")); // -> I yllaer hope ti works siht time...
console.log(reverse("Reverse this string, please!")); // -> Reverse siht string, !esaelp
