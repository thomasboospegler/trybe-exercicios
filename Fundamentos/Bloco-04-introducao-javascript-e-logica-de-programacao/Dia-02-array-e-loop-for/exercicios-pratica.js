let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
for (let number of numbers) {
  console.log(number);
}

//Exercicio 2
let soma= 0;
let numero = 0;

for (let index = 0; index < numbers.length; index++) {
  numero = numbers[index];
  soma = numero + soma;
}
console.log(soma);

//Exercicio 3
let mediaArimetica = 0;

mediaArimetica = soma / (numbers.length);

console.log(mediaArimetica);

//Exercicio 4
if (mediaArimetica > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//Exercicios 5
let maiorNumero= 0;
let numeroArray = 0;

for (let index = 0; index < numbers.length; index++) {
  numeroArray = numbers[index];
  if (numeroArray > maiorNumero) {
    maiorNumero = numeroArray;
  } else {
    maiorNumero = maiorNumero;
  }
}
console.log(maiorNumero);

//Exercicio 6
let numerosImpar = [];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) {
    numerosImpar = numerosImpar
  } else {
    numerosImpar.push(numbers[index])
  }
}
console.log(numerosImpar);

//Exercicio 7
let menorNumero;
let arrayNumber = 0;

for (let index = 0; index < numbers.length; index++) {
  arrayNumber = numbers[index];
  if (arrayNumber > menorNumero) {
    menorNumero = menorNumero;
  } else {
    menorNumero = arrayNumber;
  }
}
console.log(menorNumero);

//Exercicio 8
let sequencia = [];

for (let index = 0; index < 26; index++) {
  sequencia.push(index);
}

console.log(sequencia);

//Exercicio 9 
let resultado = [];

for (let index = 0; index < sequencia.length; index++) {
  let primeiroResultado = sequencia[index] / 2;
  resultado.push(primeiroResultado)
}
console.log(resultado);
