const sub = require("./sub");

describe('Sub', () => {
  it('should subtract two numbers', () => {
    expect(sub(3, 2)).toBe(1);
  });
});
