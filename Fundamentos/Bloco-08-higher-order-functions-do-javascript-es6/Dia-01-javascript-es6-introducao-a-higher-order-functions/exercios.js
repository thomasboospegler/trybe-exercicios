// Exercicio 1

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return employees;
};

const generateEmail = (name) => {
  const user = name.toLowerCase().split(' ').join('_');
  return {Name: name, Email: `${user}@trybe.com`}
}

console.log(newEmployees(generateEmail));


// Exerciio 2

const checkNumber = (loteryNumber ,num) => loteryNumber === num;

const sorteio = (num, func) => {
  const loteryNumber = Math.floor(Math.random() * 6);
  return func(loteryNumber, num) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(2, checkNumber));



// Exercicio 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const awnswersResult = (rigthAW, studentAW, func) => `Resultado final: ${func(rigthAW, studentAW)} pontos`;

const checkAnswers = (rigthAW, studentAW) => {
  let counter = 0;
  for (let awnswerIndex in studentAW) {
    studentAW[awnswerIndex] === rigthAW[awnswerIndex] ? counter += 1 : counter -= 0.5;
    // if (studentAW[awnswerIndex] === rigthAW[awnswerIndex]) counter += 1;
    // if (studentAW[awnswerIndex] !== rigthAW[awnswerIndex]) counter -= 0.5;
  }
  return counter;
}

console.log(awnswersResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
