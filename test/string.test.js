const stringLength = require('../scripts/string');

it('returns its characters count', () => {
  expect(stringLength('string')).toBe(6);
})