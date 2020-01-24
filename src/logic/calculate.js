import operate from './operate';

const calculate = ({
  result, nextVal, operation, buttonVal,
}) => {
  let res = result;
  if (buttonVal === 'Ac') {
    res = 0;
    return result;
  }
  if (buttonVal === '+/-') {
    res *= -1;
    return result;
  }
  return operate(res, nextVal, operation);
};

export default calculate;
