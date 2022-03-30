class Calculator {
  num1;
  num2;

  constructor (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) return 'Division by zero error'
    return this.num1 / this.num2;
  }
}

module.exports =  Calculator