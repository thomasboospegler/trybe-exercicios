//Exercicio 1
let n = 5;
let line = '';
let symbol = '*';

for (let i = 0; i < n; i += 1) {
  line = symbol;
  for (let ii = 0; ii < n -1; ii += 1){
    line += symbol;
  }
  console.log(line);
}
console.log('______________________________');


//Exercicio 2
n = 5;
line = '';
symbol = '*';

for (let i = 0; i <= n; i += 1) {
  console.log(line);
  line = line + symbol;
}
console.log('______________________________');
console.log(' ');


//Exercicio 3
n = 5;
line = '';
symbol = '*';
let position = n;

for (let i = 0; i < n; i += 1) {
  for (ii = 0; ii <= n; ii += 1) {
    if (ii < position) {
      line = line + ' ';
    } else {
      line = line + symbol;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
}
console.log('______________________________');


//Exercicio 4
n = 5;
line = '';
symbol = '*';
let mid = (n + 1) / 2;
let left = mid;
let rigth = mid;

for (let i = 0; i <= mid; i += 1) {
  for (ii = 0; ii <= n; ii += 1) {
    if (ii > left && ii < rigth) {
      line = line + symbol;
    } else {
      line = line + ' ';
    }
  }
  console.log(line);
  line = '';
  rigth += 1;
  left -= 1;
}
console.log('______________________________');
console.log(' ');


//Exercicio 5
n = 7;
line = '';
symbol = '*';
mid = (n + 1) / 2;
left = mid;
rigth = mid;

for (let i = 1; i <= mid; i += 1) {
  line = '';
  for (ii = 1; ii <= n; ii += 1) {
    if (ii == left || ii == rigth || i == mid) {
      line = line + symbol;
    } else {
      line = line + ' ';
    }
  }
  console.log(line);
  rigth += 1;
  left -= 1;
}