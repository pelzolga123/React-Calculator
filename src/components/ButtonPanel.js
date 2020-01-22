import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  /*state = {
    name: ''  
  }*/

  render() {
    return (
      <div>
        <Button name="+" />
      </div>
    );
  }
}

export default ButtonPanel;
