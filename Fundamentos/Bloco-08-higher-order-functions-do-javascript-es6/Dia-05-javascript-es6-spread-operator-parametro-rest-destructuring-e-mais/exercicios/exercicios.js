console.log('---------- Exercicio 1 ----------');
// Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});



console.log('---------- Exercicio 2 ----------');
// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos

const sum = (...numbers) => numbers.reduce((soma, number) => soma + number);

console.log(sum(2,3,4,6,8,7,5,4,3));
console.log(sum(2,3,4,6,8,7,5,4,3,7,10,34,45,1,6));
console.log(sum(2,3,4,6,8,7,5,4,3,-15,3,-7,4));



console.log('---------- Exercicio 3 ----------');
// Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));



console.log('---------- Exercicio 4 ----------');
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (peoples) => {
  return peoples.filter(({name, bornIn, nationality}) => {
    if (nationality === 'Australian') {
      if (bornIn > 1900 && bornIn <= 2000) return name;
    }
  })
}
console.log(filterPeople(people));


const filterPeople2 = (peoples) => peoples.filter(({bornIn, nationality}) => 
nationality === 'Australian'&& bornIn > 1900 && bornIn <= 2000);

console.log(filterPeople2(people));



console.log('---------- Exercicio 5 ----------');
// Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só

const myList = [1, 2, 3];

const swap = ([first, second, third]) => [third, second, first];

console.log(swap(myList));



console.log('---------- Exercicio 6 ----------');
// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({name, brand, year}) 

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));



console.log('---------- Exercicio 7 ----------');
// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));



console.log('---------- Exercicio 8 ----------');
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento

const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

console.log(greet('John'))
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))



console.log('---------- Exercicio 9 ----------');
// Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months);
