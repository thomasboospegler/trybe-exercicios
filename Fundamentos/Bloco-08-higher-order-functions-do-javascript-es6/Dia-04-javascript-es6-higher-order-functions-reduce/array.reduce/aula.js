// UTILIZANDO FOR
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

//UTILIZANDO O REDUCE
const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers2 = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers3 = numbers.reduce(getSum);
console.log(sumNumbers3); // 113


//////////////////////////////////


const collection = [1, 2, 3, 4, 5];

const getSum4 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers4 = collection.reduce(getSum4);
console.log(sumNumbers4); // 15

/////////////////////

const numbers5 = [32, 15, 3, 2, -5, 56, 10];

const getSum5 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers5 = numbers.reduce(getSum5);
console.log(sumNumbers5); // 113


const numbers6 = [32, 15, 3, 2, -5, 56, 10];

const getSum6 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers6 = numbers.reduce(getSum6, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers6); // 113


const numbers7 = [32, 15, 3, 2, -5, 56, 10];

const getSum7 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers7 = numbers.reduce(getSum7, 10);
console.log(sumNumbers7); // 123



/// EXERCICIO

const numbersPratica = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const biggerNumber = numbersPratica.reduce(getBigger, 0);
console.log(biggerNumber); // 85


const numbersPratica2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPar = (acumulador, numero) => ((numero % 2 === 0) ? acumulador + numero : acumulador);

console.log(numbersPratica2.reduce(sumPar, 0));

// Para melhorar aidna mais podemos fazer:
const sumPair = (accumulator, number) => (number % 2 === 0) ? accumulator + number : accumulator;

const sumNumber = (array) => array.reduce(sumPair, 0);

console.log(sumNumber(numbersPratica2)); // 152
