//       Aula 1

//Exemplo 1
let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
  };
    
  //diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo

//Exemplo 2
let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

//Exemplo 3
let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//Exemplo 4
let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey


console.log('____________________________');
console.log(' ');

//Exercicio 1
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2,
    silver: 3 
  },
};

//Exercicio 2
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem' + player.age + ' anos de idade.');

//Exercicio 3
player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { 
    golden: 2,
    silver: 3 
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

//Exercicio 4
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

//Exerccio 5
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.golden + ' medalhas de prata.');

console.log('____________________________');
console.log(' ');


//       Aula 2

//Exemplo 1
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
  // type Fiat
  // model 500
  // color white
}

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

console.log('____________________________');
console.log(' ');

//Exercicio 1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let position in names) {
  console.log('Ola', names[position]);
};

//Exercicio 2
car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let position in car) {
  console.log(position, car[position]);
};

console.log('____________________________');
console.log(' ');


//       Aula 3

//Exemplo 1

// ----Sem função----
let nome = 'João';

console.log('Bom dia, ' + nome);


// ----Com função----
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!


//Exemplo 2
let status = 'deslogado';

function logarDeslogar() {
  if (statusLogin === 'deslogado') {
    statusLogin = 'logado';
  } else {
    statusLogin = 'deslogado';
  }
}

console.log(statusLogin); // deslogado

logarDeslogar();
console.log(statusLogin); // logado

logarDeslogar();
console.log(statusLogin); // deslogado

console.log('O usuário está ' + statusLogin); // O usuário está deslogado


//Exemplos 3
// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais