const sum = require('./sum');

describe('Sum', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
