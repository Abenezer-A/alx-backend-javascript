function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

module.exports = function calculateNumber(type, a, b = 0) {
  let aNum = Number(a);
  let bNum = Number(b);

  if (Number.isNaN(aNum) || Number.isNaN(bNum))
    throw TypeError('Parameters must be numbers or number convertible');

  aNum = Math.round(aNum);
  bNum = Math.round(bNum);

  switch (type) {
    case 'SUM':
      return aNum + bNum;
    case 'SUBTRACT':
      return aNum - bNum;
    case 'DIVIDE':
      if (bNum === 0) return 'ERROR';
      const quotient = aNum / bNum;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Allowed types: SUM SUBTRACT and DIVIDE.'
      );
  }
};
