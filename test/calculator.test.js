const Calculator = require("../scripts/calculator");

describe('My calculator', () => {
  const calc = new Calculator();

  describe('add', () => {
    // Arrange
    it('sum 1 + 2 to be equal 3', () => {
      // Assert
      expect(calc.add(1, 2)).toBe(3);
    })

    it('sum 2 + 2 to be equal 4', () => {
      expect(calc.add(2, 2)).toBe(4);
    })

    it('sum 100 + 201 to be equal 301', () => {
      expect(calc.add(100, 201)).toBe(301);
    })
  })

  describe('subtract', () => {
    it('subtract 1 - 2 to be equal -1', () => {
      expect(calc.subtract(1, 2)).toBe(-1);
    })

    it('subtract 22 - 22 to be equal 0', () => {
      expect(calc.subtract(22, 22)).toBe(0);
    })

    it('subtract 100 - 201 to be equal -101', () => {
      expect(calc.subtract(100, 201)).toBe(-101);
    })
  })

  describe('divide', () => {
    it('divide 1 / 2 to be equal 0.5', () => {
      expect(calc.divide(1, 2)).toBe('0.5000');
    })

    it('divide 22 / 22 to be equal 1', () => {
      expect(calc.divide(22, 22)).toBe('1.000');
    })

    it('divide 100 / 201 to be equal 0.4975', () => {
      expect(calc.divide(100, 201)).toBe('0.4975');
    })
  })

  describe('multiply', () => {
    it('multiply 1 * 2 to be equal 2', () => {
      expect(calc.multiply(1, 2)).toBe(2);
    })

    it('multiply 22 * 22 to be equal 484', () => {
      expect(calc.multiply(22, 22)).toBe(484);
    })

    it('multiply 100 * 201 to be equal 20100', () => {
      expect(calc.multiply(100, 201)).toBe(20100);
    })
  })
})