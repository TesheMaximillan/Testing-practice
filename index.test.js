const { stringLength, reverseString } = require('./index');

it('Check string length', () => { 
  const result = stringLength('Teshome');
  expect(result).toBe(7);
 });

 it('Check the minimum size of the string', () => {
   const result = stringLength('');
   expect(result).toBe('The string should be between 1 and 10 character ')
 })

 it('Check the maximum size of the string', () => {
   const result = stringLength('TeshomeKurabachew');
   expect(result).toBe('The string should be between 1 and 10 character ')
 })

 it('Check string is reversed', () => {
   const result = reverseString('Teshome');
   expect(result).toBe('emohseT');
 })