class Calculator {
  // constructor(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  divide(x, y) {
    return Number.parseFloat(x / y).toPrecision(4);
  }

  multiply(x, y) {
    return x * y;
  }
}

module.exports = Calculator;