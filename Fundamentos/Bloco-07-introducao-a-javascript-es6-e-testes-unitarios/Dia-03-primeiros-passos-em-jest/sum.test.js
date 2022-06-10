// sum.test.js
const sum = require('./sum');

describe('Verify sum()', () => {
  it('should return 9, the sum of 4 and 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('should return 0, the sum of 0 and 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('should return -2, the sum of -1 and -1', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
  it('should return error, the sum of 4 and "5"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
