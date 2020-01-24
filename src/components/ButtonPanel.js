import React from 'react';
import Button from './Button';


const ButtonPanel = () => (
  <div className="panel">
    <div className="first-row">
      <Button btnName="Ac" color="rgb(221, 221, 221)" false />
      <Button btnName="+/-" color="rgb(221, 221, 221)" false />
      <Button btnName="%" color="rgb(221, 221, 221)" false />
      <Button btnName="÷" color="#FF8C00" false />
    </div>
    <div className="second-row">
      <Button btnName="7" color="rgb(221, 221, 221)" false />
      <Button btnName="8" color="rgb(221, 221, 221)" false />
      <Button btnName="9" color="rgb(221, 221, 221)" false />
      <Button btnName="x" color="#FF8C00" false />
    </div>
    <div className="third-row">
      <Button btnName="4" color="rgb(221, 221, 221)" false />
      <Button btnName="5" color="rgb(221, 221, 221)" false />
      <Button btnName="6" color="rgb(221, 221, 221)" false />
      <Button btnName="-" color="#FF8C00" false />
    </div>
    <div className="fourth-row">
      <Button btnName="1" color="rgb(221, 221, 221)" false />
      <Button btnName="2" color="rgb(221, 221, 221)" false />
      <Button btnName="3" color="rgb(221, 221, 221)" false />
      <Button btnName="+" color="#FF8C00" false />
    </div>
    <div className="fifth-row">
      <Button btnName="0" color="rgb(221, 221, 221)" true />
      <Button btnName="." color="rgb(221, 221, 221)" false />
      <Button btnName="=" color="#FF8C00" false />
    </div>
  </div>
);

export default ButtonPanel;
