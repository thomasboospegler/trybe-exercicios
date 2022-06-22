// Teoria
/////////
// Parte 1
/////////

function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

const sum2 = (number1, number2) => {
  return number1 + number2;
};

/////////

const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

//////////

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

///////////
// Parte 2
///////////

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

////////////
// Parte 3
////////////

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

///////

const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat2(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

////////

const repeat3 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat3(3, isEven); // Testa quais números serão pares;
repeat3(3, isOdd); // Testa quais números serão ímpares;

//////////

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);


//////////
// Pratica
/////////


const wakeUp = () => console.log('Acordando!!');;

const cofee = () => console.log('Bora tomar café!!');;

const goSleep = () => console.log('Partiu dormir!!');;

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(cofee);
doingThings(goSleep);
