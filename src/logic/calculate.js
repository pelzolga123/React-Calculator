import operate from './operate';

const calculate = (data, mark) => {
  let { result, nextVal, operation } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['÷', '-', '+', 'x'];

  if (mark === 'Ac') {
    result = null;
    nextVal = null;
    operation = null;
  }
  if (mark === '=') {
    while (nextVal !== null) {
      result = operate(result, nextVal, operation);
      nextVal = null;
    }
  }
  if (mark === '+/-') {
    result *= -1;
    nextVal *= -1;
  }
  if (mark === '%') {
    result /= 100;
    nextVal /= 100;
  }

  if (numbers.includes(mark)) {
    while (nextVal === null) {
      nextVal = '';
    }
    nextVal += mark;
  }
  if (mark === '.') {
    if (!nextVal.includes('.')) {
      nextVal += mark;
    }
  }

  if (operations.includes(mark)) {
    while (nextVal !== null && operation !== null) {
      result = operate(result, nextVal, operation);
      operation = mark;
      nextVal = null;
    }
    while (nextVal !== null) {
      result = nextVal;
      nextVal = null;
    }
    if (nextVal == null || operation == null) {
      operation = mark;
    }
  }
  return { result, nextVal, operation };
};

export default calculate;
