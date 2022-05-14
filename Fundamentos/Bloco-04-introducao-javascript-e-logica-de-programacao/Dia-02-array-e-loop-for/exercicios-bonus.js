//Exercicios Bonus

// let array = [1,4,2,3];

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//Exercicio 2
for (let index = 1; index < numbers.length; index += 1){
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//Exercicio 3
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = [];

for (let index = 1; index <= number.length; index += 1) {
  for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1) {
    if (index == number.length) {
      let math = number[secondIndex] * 2;
      result.push(math);
    } else {
      let math = number[secondIndex] * number[index];
      result.push(math);
    }
  }
}
console.log(result);