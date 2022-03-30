const { it } = require('@jest/globals');
const Calculator = require('./Calculator')

describe('calculator', () => {
  it('Return the sum', () => {
    const calculator = new Calculator(5, 6);
    expect(calculator.add()).toBe(11);
  });

  it('Return the difference', () => {
    const calculator = new Calculator(5, 6);
    expect(calculator.subtract()).toBe(-1);
  });

  it('Return the Multiplication', () => {
    const calculator = new Calculator(5, 6);
    expect(calculator.multiply()).toBe(30);
  });

  it('Return the Division', () => {
    const calculator = new Calculator(10, 2);
    expect(calculator.divide()).toBe(5);
  })

  it('Handle divisin by zero', () => {
    const calculator = new Calculator(10, 0);
    expect(calculator.divide()).toBe('Division by zero error');
  })
});
