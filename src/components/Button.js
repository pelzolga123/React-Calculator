import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  mark, color, wide, buttonClick,
}) => (
  <button
    type="button"
    style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
    onClick={() => buttonClick(mark)}
  >
    { mark }
  </button>
);
Button.propTypes = {
  mark: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  buttonClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#FF8C00',
  wide: false,
};

export default Button;
