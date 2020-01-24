const Big = require('big.js');

const operate = (first, second, operation) => {
  const firstVal = Big(first);
  const secondVal = Big(second);
  let res = 0;

  if (operation === '+') {
    res = firstVal.plus(secondVal).toString();
  } else if (operation === '-') {
    res = firstVal.minus(secondVal).toString();
  } else if (operation === '÷' && secondVal.toString() !== '0') {
    res = firstVal.div(secondVal).toString();
  } else if (operation === '÷' && secondVal.toString() === '0') {
    res = "Can't divide by zero";
  } else if (operation === 'x') {
    res = firstVal.times(secondVal).toString();
  } else if (operation === '%') {
    res = firstVal.mod(secondVal).toString();
  } else res = 'Invalid operation';
  return res;
};

export default operate;
