import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, color, wide }) => (
  <button
    type="button"
    style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
  >
    {btnName}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#FF8C00',
  wide: false,
};

export default Button;
