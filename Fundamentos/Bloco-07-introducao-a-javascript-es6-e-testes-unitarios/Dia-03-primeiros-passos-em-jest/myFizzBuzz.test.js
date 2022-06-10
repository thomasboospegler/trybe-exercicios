const myFizzBuzz = require('./myFizzBuzz');

describe('Verify myFizzBuzz()', () => {
  it('should return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('should return buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
});