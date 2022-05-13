const a = 5;
const b = 3;
const c = 8;

//Exercicio 1
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Exercicio 2
if (a > b){
  console.log(a + ' é maior que ' + b);
}else {
  console.log(b + ' é maior que ' + a);
}
  
//Exercicio 3
if (a > b && a > c) {
  console.log(a + ' é maior que ' + b + ' e ' + c);
} else if (c > b && c > a) {
  console.log(c + ' é maior que ' + b + ' e ' + a);
} else {
  console.log(b + ' é maior que ' + c + ' e ' + a);
}

//Exercicio 4
const valor = -10;

if (valor > 0) {
  console.log('O numero é positivo');
} else if (valor < 0) {
  console.log('O numero é negativo');
} else {
  console.log('O numero é zero');
}

//Exercicio 5
const angulo1 = 50;
const angulo2 = 70;
const angulo3 = 60;

if ((angulo1 + angulo2 + angulo3) == 180) {
  console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('ERROR');
} else {
  console.log(false);
}

//Exercicio 6
let piece = 'Knigth';
let result = piece.toLocaleLowerCase();

switch (result) {
  case 'king':
    console.log('1 every direction');
    break;
  case 'queen':
    console.log('All posibilities');
    break;
  case 'rook':
    console.log('straith');
    break;
  case 'bishop':
    console.log('Diagonal');
    break;
  case 'knigth':
    console.log('L movment');
    break;
  case 'pawn':
    console.log('One forward');
    break;
  default:
    console.log('ERROR');
}

//Exercicio 7
const nota = '60%'

if (nota >= '90%') {
  console.log('A');
} else if (nota >= '80%') {
  console.log('B');
} else if (nota >= '70%') {
  console.log('C');
} else if (nota >= '60%') {
  console.log('D');
} else if (nota >= '50%') {
  console.log('E');
} else {
  console.log('F');
}

//Exercicio 8
const n1 = 5;
const n2 = 3;
const n3 = 8;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//Exercicio 9
if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

//Exercicio 10
const cost = 4;
const price = 10;
const amount = 1000;
let totalCost = cost * amount;
let tax = (20 * totalCost) / 100;
let totalPrice = price * amount;
let finalTotalCost = totalCost + tax;
let profit = totalPrice - finalTotalCost;

console.log('O lucro é de: ' + profit);

//Exercicio 11
const salario = 3000.00;
let inss;
let imposto;

if (salario <= 1556.94) {
  inss = (8 * salario) / 100;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = (9 * salario) / 100;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = (11 * salario) / 100;
} else {
  inss = salario - 570.88;
}

let resultadoInss = salario - inss

if (resultadoInss <= 1903.98) {
  imposto = 0
} else if (resultadoInss >= 1903.99 && resultadoInss <= 2826.65) {
  imposto = ((7.5 * resultadoInss) / 100) - 142.80;
} else if (resultadoInss >= 2826.66 && resultadoInss <= 3751.05) {
  imposto = ((15 * resultadoInss) / 100) - 354.80;
} else if (resultadoInss >= 3751.06 && resultadoInss <= 4664.68) {
  imposto = ((22.5 * resultadoInss) / 100) - 636.13;
} else {
  imposto = ((27.5 * resultadoInss) / 100) - 869.36;
}

let salarioLiquido = resultadoInss - imposto;

console.log(salarioLiquido);