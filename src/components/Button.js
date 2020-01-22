import React from 'react';

const Button = (name) => {
  const { buttonName } = name;
  return (
    <button>{buttonName}</button>
  );
};

export default Button;
