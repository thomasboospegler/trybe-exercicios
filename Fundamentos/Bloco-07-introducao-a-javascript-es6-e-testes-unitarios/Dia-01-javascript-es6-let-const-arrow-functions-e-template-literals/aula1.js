// Exemplo 1
function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();

// Exemplo 2
if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// Exemplo 3
var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas

// Exemplo 4
const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

// Exemplo 5
const userInfo = {
  name: 'Cláudio',
  id: '5489-2',
  email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// Exemplo 6
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// Exemplo 7
age = 20;

var age;

console.log(age); // 20


var age;

age = 20;

console.log(age); // 20


var age;

console.log(age); // undefined

age = 20;