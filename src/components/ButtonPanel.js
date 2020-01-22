import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      btnName: '',
    };
  }

  render() {
    return (
      <div class ='panel'>
        <div className="first-row">
          <Button btnName="Ac" />
          <Button btnName="+/-" />
          <Button btnName="%" />
          <Button btnName="÷" />
        </div>
        <div className="second-row">
          <Button btnName="7" />
          <Button btnName="8" />
          <Button btnName="9" />
          <Button btnName="x" />
        </div>
        <div className="third-row">
          <Button btnName="4" />
          <Button btnName="5" />
          <Button btnName="6" />
          <Button btnName="-" />
        </div>
        <div className="fourth-row">
          <Button btnName="1" />
          <Button btnName="2" />
          <Button btnName="3" />
          <Button btnName="+" />
        </div>
        <div className="fifth-row">
          <Button btnName="0" />
          <Button btnName="." />
          <Button btnName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
