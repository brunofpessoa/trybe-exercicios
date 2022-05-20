const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(data) {
  return data.reduce((acc, curr) => (curr.toLowerCase().startsWith("a") ? (acc += 1) : acc), 0);
}

console.log(containsA(names));
