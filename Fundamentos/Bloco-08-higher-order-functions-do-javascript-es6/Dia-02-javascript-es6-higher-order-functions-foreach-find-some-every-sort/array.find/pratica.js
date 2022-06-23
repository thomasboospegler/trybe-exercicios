const numbers = [19, 21, 30, 3, 45, 22, 15];

// O find nao tem retorno
const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  let result = array.find((number) => number % 3 === 0 && number % 5 === 0);
  return result;
}

console.log(findDivisibleBy3And5(numbers));


//-------------------------------------------
// Exercicio 2
//-------------------------------------------


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  let result = names.find((name) => name.length === 5);
  return result;
}

console.log(findNameWithFiveLetters());


//-------------------------------------------
// Exercicio 3
//-------------------------------------------


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui:
  let result = musicas.find((musica) => musica.id === id);
  return result;
}

console.log(findMusic('31031685'));
