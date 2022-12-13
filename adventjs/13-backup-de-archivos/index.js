function getFilesToBackup(lastBackup, changes) {
  return [...new Set(changes
    .filter(backup => backup.at(1) > lastBackup)
    .map(backup => backup.at(0))
    .sort((a, b) => a - b))
  ];
}

const lastBackup = 1546300800
const changes = [
  [ 2, 1546300800 ],
  [ 3, 1546301100 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
];
console.log(getFilesToBackup(lastBackup, changes)); // -> [ 1, 3 ]
console.log(getFilesToBackup(1546300800, [
  [2, 1546300800],
  [3, 1546301100],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000]
])); // -> [ 1, 3 ]
console.log(getFilesToBackup(1556300600, [
  [ 1, 1546300800 ],
  [ 2, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
  [ 3, 1546301100 ]
])); // -> []
