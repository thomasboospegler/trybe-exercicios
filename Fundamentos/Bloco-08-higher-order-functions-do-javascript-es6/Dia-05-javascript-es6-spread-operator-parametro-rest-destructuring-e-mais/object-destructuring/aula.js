const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas



// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);





const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']




const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classAssigned, c: subject } = student;

console.log(nome); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática




const product2 = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui na ${seller}`);
};

printProductDetails(product2); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
