import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickButton }) => {
  const arr = [{
    mark: 'Ac',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '+/-',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '%',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '÷',
    color: '#FF8C00',
    w: false,
  },
  {
    mark: '7',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '8',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '9',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: 'x',
    color: '#FF8C00',
    w: false,
  },
  {
    mark: '4',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '5',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '6',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '-',
    color: '#FF8C00',
    w: false,
  },
  {
    mark: '1',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '2',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '3',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '+',
    color: '#FF8C00',
    w: false,
  },
  {
    mark: '0',
    color: 'rgb(221, 221, 221)',
    w: true,
  },
  {
    mark: '.',
    color: 'rgb(221, 221, 221)',
    w: false,
  },
  {
    mark: '=',
    color: '#FF8C00',
    w: false,
  },
  ];
  const btn = arr.map((i) => (
    <Button
      key={i.mark}
      mark={i.mark}
      color={i.color}
      wide={i.w}
      buttonClick={clickButton}
    />
  ));

  return (
    <div className="panel">
      <div className="row">
        {btn}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickButton: PropTypes.func.isRequired,
};

export default ButtonPanel;
