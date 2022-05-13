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

let weekDay = 'quinta-feira';

if (weekDay == 'segunda-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay == 'terça-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay == 'quarta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay == 'quinta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay == 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido UwU');
}




// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false


// console.log(!42); // false

// console.log(!0); // true
// // O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// console.log(!null); // true

// console.log(!undefined); // true

