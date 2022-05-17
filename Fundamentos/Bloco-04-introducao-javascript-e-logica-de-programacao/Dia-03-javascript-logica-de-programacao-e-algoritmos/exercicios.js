//Exercicios 1
let numero = 10;
let fatorial = 1;

for (let index = numero; index > 0; index -= 1) {
  fatorial = fatorial * index;
}
console.log(fatorial);


//Exercicio 2
let word = 'tryber';
let result = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
  result += word[index]
}
console.log(result);


//Exercicios 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

for (let index = 0; index < array.length; index += 1) {
  let tempResult = array[index];
  if (tempResult.length > maior.length) {
    maior = tempResult
  }
}
console.log('A maior palavra deste array é:', maior);

for (let index = 0; index < array.length; index += 1) {
  let tempResult = array[index];
  if (maior.length > tempResult.length) {
    menor = tempResult
  }
}
console.log('A menor palavra deste array é:', menor);


//Exercicio 4
let biggestPrime = 0;
let primesList = [];

for (n = 1; n <= 50; n += 1) {
  let divider = 0;
  for (x = 1; x <= n; x += 1) {
    if (n % x == 0) {
      divider += 1;
    }
  }
  if (divider == 2) {
    biggestPrime = n;
    primesList.push(n);
  }
}
console.log(biggestPrime);
console.log(primesList);