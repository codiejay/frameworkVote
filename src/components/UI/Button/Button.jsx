import React from 'react';
import classes from './Button.module.css';
const Button = props => {
  const { clicked, landingBtn, onClick } = props;
  return (
    <button
      className={landingBtn === 'Custom' ? classes.Custom : classes.Button}
      onClick={clicked || onClick}
    >
      {' '}
      {props.children}
    </button>
  );
};

export default Button;
