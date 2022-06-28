const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

//                 colocando o 'nationality =' ele so altera para as que nao possuem essa chave

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
