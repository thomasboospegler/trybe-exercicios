const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

console.log(people);

// Adicione se código aqui
console.log('Ordem cresente');
people.sort((a, b) => a.age > b.age ? 1 : -1);

console.log(people);

console.log('Ordem decresente');
people.sort((a, b) => a.age < b.age ? 1 : -1);

console.log(people);
