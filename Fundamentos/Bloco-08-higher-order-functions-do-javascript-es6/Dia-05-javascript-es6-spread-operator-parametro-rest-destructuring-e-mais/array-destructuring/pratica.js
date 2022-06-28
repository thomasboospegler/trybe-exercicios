const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, funcaoSaudacoes] = saudacoes;
console.log(funcaoSaudacoes(saudacao));



let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida);



let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares);
