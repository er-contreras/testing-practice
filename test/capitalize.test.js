const capitalize = require("../scripts/capitalize");

it('capitalize...', () => {
  expect(capitalize('string')).toBe('String');
})

it('capitalize...', () => {
  expect(capitalize('strong')).toBe('Strong');
})

it('capitalize...', () => {
  expect(capitalize('color')).toBe('Color');
})