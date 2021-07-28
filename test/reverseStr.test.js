const reverseString = require("../scripts/reverseStr");

it('String should be reverse', () => {
  expect(reverseString('string')).toBe('gnirts');
})