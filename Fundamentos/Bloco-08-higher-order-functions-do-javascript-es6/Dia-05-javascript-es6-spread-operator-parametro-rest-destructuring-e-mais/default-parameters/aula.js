// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting(); // Welcome usuário!


const greeting = (user = 'usuário') => `Welcome ${user}!`;

console.log(greeting());
console.log(greeting('Thomas'));
console.log(greeting('João'));
console.log(greeting('Claudio'));
