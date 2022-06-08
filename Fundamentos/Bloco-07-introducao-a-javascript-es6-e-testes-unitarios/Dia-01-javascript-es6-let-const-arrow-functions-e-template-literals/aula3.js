// Exemplo 1 - Sem arrow function 
const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

// Exemplo 1 
const printName2 = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName2());

// Exemplo 3
const printName3 = () => 'Lucas';
console.log(printName3());

// ---------------
// Exemplo 1
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Exemplo 2
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));