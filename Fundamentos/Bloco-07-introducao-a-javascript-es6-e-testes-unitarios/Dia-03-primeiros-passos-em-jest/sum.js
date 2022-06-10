// sum.js

const checkIsNumber = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
}

const sum = (a, b) => {
  checkIsNumber(a, b);
  return a + b;
}

module.exports = sum;