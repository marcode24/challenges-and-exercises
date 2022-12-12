function selectSleigh(distance, sleighs) {
  const selected = sleighs
    .filter(sleigh => sleigh.consumption * distance <= 20);
  return selected.length > 0 ? selected[selected.length - 1].name : null;
}

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // -> "Dancer"
console.log(selectSleigh(1, [
  { name: 'pheralb', consumption: 0.3 },
  { name: 'TMChein', consumption: 0.5 }
])
); // -> "TMChein"
console.log( selectSleigh(10, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 5 }
])
); // -> "Pedrosillano"
console.log(selectSleigh(10, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
])
); // -> "samajaffal"
console.log(selectSleigh(50, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
])); // -> null
