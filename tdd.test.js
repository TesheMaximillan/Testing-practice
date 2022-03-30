const { capitalizeString } = require('./tdd');

it('Check if the first letter is Uppercase', () => {
  const result = capitalizeString('teshome');
  expect(result).toBe('Teshome');
})