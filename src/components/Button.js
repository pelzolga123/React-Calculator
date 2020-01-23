import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { btnName, color, wide } = props;
  let size = wide;
  if (wide) {
    size = '50%';
  } else size = '25%';

  return (
    <button
      type="button"
      style={{ backgroundColor: color, width: size }}
    >
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  btnName: '',
  color: '#FF8C00',
  wide: false,
};

export default Button;
