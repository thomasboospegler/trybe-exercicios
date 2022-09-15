//Exercicio 1
function checkIfPalindromo(string) {
  let n = 0;
  for (let i = string.length - 1; i >= 0; i -= 1){
    if (string[i] == string[n]){
      n += 1;
    } else {
      return false;
    };
  };
  return true;
};
console.log(checkIfPalindromo('arara'));

//Exercicio 2
function returnIndexBiggestNumber(array) {
  let bigger = 0;
  let position = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] > bigger) {
      bigger = array[i];
      position = i;
    };
  };
  return position
};
let arrayTest = [2, 3, 6, 7, 10, 1]
console.log(returnIndexBiggestNumber(arrayTest));

//Exercicio 3
function returnIndexSmallestNumber(array) {
  let smallest = array[array.length - 1]
  let position = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] <= smallest) {
      smallest = array[i];
      position = i;
    };
  };
  return position
};
let arrayTest2 = [2, 4, 6, 7, 10, 0, -3]
console.log(returnIndexSmallestNumber(arrayTest2));

//Exercicio 4
function returnBiggestName(array) {
  let count = 0;
  let position = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i].length > count) {
      count = array[i].length;
      position = i
    };
  };
  console.log(array[position]);
};
let arrayTest3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
returnBiggestName(arrayTest3);

//Exercicio 5
function repeatedMoreTimes(array) {
  let number = 0;
  let repeat = 0;
  for (i = 0; i < array.length; i += 1) {
    let times = 0;
    for (ii = 0; ii < array.length; ii += 1) {
      if (array[i] == array[ii]) {
        times += 1;
      };
    };
    if (times > repeat) {
      repeat = times
      number = array[i];
    }
  };
  return number
};
let arrayTest4 = [2, 3, 2, 5, 8, 2, 3];
console.log(repeatedMoreTimes(arrayTest4));

//Exercicio 6
function numberPlusNumberTimes(number) {
  if (number > 0) {
    let result = 0;
    for (i = 1; i <= number; i += 1) {
      result = result + i
    }
    return result;
  };
};
console.log(numberPlusNumberTimes(5));

//Exercicio 7
function verifyEndingWordsToCompare(word, ending) {
  let difference = word.length - ending.length;
  let newWord = [];
  for (i = difference; i < word.length; i += 1) {
    newWord.push(word[i]);
  };
  let splited = ending.split('');
  for (ii = 0; ii < difference; ii += 1) {
    if (newWord[ii] == splited[ii]){
    } else {
      return false
    };
    return true
  };
};
console.log(verifyEndingWordsToCompare('trybe', 'be'));