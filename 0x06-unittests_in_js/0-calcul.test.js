const mocha = require('mocha');
const assert = require('assert');

const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of 2 integers', () => {
    assert.strictEqual(calculateNumber(2, 5), 7);
    assert.strictEqual(calculateNumber(3, -1), 2);
    assert.strictEqual(calculateNumber(0, -3), -3);
  });

  it('should round floats before adding them', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.6, 3.7), 6);
    assert.strictEqual(calculateNumber(0.3, 0.4), 0);
    assert.strictEqual(calculateNumber(1.4, 5), 6);
  });

  it('should return only the rounded number if only a single argument is given', () => {
      assert.strictEqual(calculateNumber(10), 10);
      assert.strictEqual(calculateNumber(6.6), 7);
      assert.strictEqual(calculateNumber(-10), -10)
      assert.strictEqual(calculateNumber(-1.2), -1)

  });

  it('should convert a non-number to a number if convertible', () => {
      assert.strictEqual(calculateNumber(true,  31), 32)
      assert.strictEqual(calculateNumber('1.5','0.6'),3);
      assert.strictEqual(calculateNumber('1.2', 3.7), 5);
      assert.strictEqual(calculateNumber('1.5', false), 2);
  });

  it('should throw typeError if parameter convertion to number failed', () => {
    assert.throws(() => calculateNumber('hello'), {
      name: 'TypeError',
      message: 'All parameters must be numbers'
    });
    assert.throws(() => calculateNumber('david', 10), {
      name: 'TypeError',
      message: 'All parameters must be numbers'
    });
  });
});
