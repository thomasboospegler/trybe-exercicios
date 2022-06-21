const myRemove = require('./myRemove');

describe('Verify myRemove()', () => {
  it('should return [1, 2, 4]',() => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('should not return [1, 2, 3, 4]',() => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('should return [1, 2, 3, 4]',() => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
