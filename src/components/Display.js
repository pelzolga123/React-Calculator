import React from 'react';

const Display = (data) => {
  const { result } = data;
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

export default Display;
