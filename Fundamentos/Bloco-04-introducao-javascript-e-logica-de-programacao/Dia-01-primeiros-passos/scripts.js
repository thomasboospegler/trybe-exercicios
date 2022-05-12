// const myName = "Thomas";
// const birthCity = "Sao Paulo";
// let birthYear = 2000;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);


// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)
// console.log(typeof patientAge)


// const base = 5;
// const height = 8;
// const area = 5 * 8;
// const perimeter = 5 + 8 + 5 + 8;

// console.log(base);
// console.log(height);
// console.log(area);
// console.log(perimeter);


// const notaCandidato = 70;

// if (notaCandidato >= 80 && notaCandidato <= 100) {
//   console.log("Parabéns, você foi aprovada(o)!")
// } 
// else if (notaCandidato < 80 && notaCandidato >= 60) {
//   console.log("Você esta na lista de espera");
// }
// else if (notaCandidato < 60) {
//   console.log("Você foi reprovada(o)");
// }
// else {
//   console.log("Digite um valor valido");
// }


// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

const currentHour = 17;
let message = "";

if (currentHour >= 24) {
  message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}
else if (currentHour < 4) {
  message = "Deveriamos estar dormindo";
}
else {
  message = "Digite um horario valido";
}

console.log(message);