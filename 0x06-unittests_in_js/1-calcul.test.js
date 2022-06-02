const mocha = require('mocha')
const assert = require('assert');

const calculateNumber = require('./1-calcul.js');


describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return sum of 2 integers', () => {
	assert.strictEqual(calculateNumber('SUM', 7, 3), 10);
	assert.strictEqual(calculateNumber('SUM', 8, -2), 6);
	assert.strictEqual(calculateNumber('SUM', -4, -4), -8);
	assert.strictEqual(calculateNumber('SUM', -4, 4), 0);
    });

      it('should round floats then perform addition', () => {
	  assert.strictEqual(calculateNumber('SUM', 6.4, 5), 11);
	  assert.strictEqual(calculateNumber('SUM', 1.2, 3.5), 5);
	  assert.strictEqual(calculateNumber('SUM', 2, -1.2), 1);
	  assert.strictEqual(calculateNumber('SUM', 18, -8), 10);
	  assert.strictEqual(calculateNumber('SUM', 5.8, -1.2), 5);
	  assert.strictEqual(calculateNumber('SUM', 3.1, -3), 0);
	  assert.strictEqual(calculateNumber('SUM', 2.1, -5.2), -3);
    });

    it('should return rounded number if only one of the 2 numbers is provided', () => {
	assert.strictEqual(calculateNumber('SUM', 1.7), 2);
	assert.strictEqual(calculateNumber('SUM', -1.3), -1);
	assert.strictEqual(calculateNumber('SUM', -0.2), 0);
	assert.strictEqual(calculateNumber('SUM', -0.1), 0);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the difference of 2 numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 1), 0);
    });

    it('should return difference of 2 rounded floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 5.3, 4), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 4.4), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 10.2, 9.8), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 10.2, 10), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 9.8), 0);

      assert.strictEqual(calculateNumber('SUBTRACT', 8.2, 9.2), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 8.2, 9), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 8, 9.2), -1);
    });

    it('should return rounded number if only one is provided', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 8.7), 9);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.3), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -8.7), -9);
    });
  });

  describe('type DIVIDE', () => {
    it('should return quotient of integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 10, 4), 2.5);
      assert.strictEqual(calculateNumber('DIVIDE', 12, -3), -4);
      assert.strictEqual(calculateNumber('DIVIDE', -8, -16), 0.5);
    });

    it('should return quotient of non-zero rounded floats', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, 5.2), 0.4);
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, 5), 0.4);
      assert.strictEqual(calculateNumber('DIVIDE', 2, 5.2), 0.4);
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, 5.2), -0.4);
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, 5), -0.4);
      assert.strictEqual(calculateNumber('DIVIDE', -2, 5.2), -0.4);
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, -5.2), -0.4);
      assert.strictEqual(calculateNumber('DIVIDE', 1.6, -5), -0.4);
      assert.strictEqual(calculateNumber('DIVIDE', 2, -5.2), -0.4);
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -5.2), 0.4);
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -5), 0.4);
      assert.strictEqual(calculateNumber('DIVIDE', -2, -5.2), 0.4);
    });

    it('should return 0 if divisor rounds to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.3, 3.6), 0);
      assert.strictEqual(calculateNumber('DIVIDE', -0.3, 3.6), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0, 3.6), 0);
    });

    it('should return Error if divisor is zero or rounds off to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7, 0), 'ERROR');
      assert.strictEqual(calculateNumber('DIVIDE', 6, -0.2), 'ERROR');
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 0), 'ERROR');
    });
  });

  describe('Operation type invalid', () => {
    it('should throw error if operation type is invalid', () => {
      assert.throws(() => calculateNumber('INVALID',2, 4), {
        message:
          'Invalid operation type. Allowed types: SUM SUBTRACT and DIVIDE.'
      });
    });
  });
});
