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


// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false
