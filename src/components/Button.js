import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnName } = props;
  return (
    <button type="button">{btnName}</button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
};

Button.defaultProps = {
  btnName: '',
};

export default Button;
