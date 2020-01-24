import operate from './operate';

const calculate = ({ data, buttonVal }) => {
  let { result, nextVal, operation } = data;
  if (buttonVal === 'Ac') {
    result = null;
    nextVal = null;
    operation = null;
    return result;
  }
  if (buttonVal === '+/-') {
    result *= -1;
    nextVal *= -1;
    return result;
  }
  return operate(result, nextVal, operation);
};

export default calculate;
