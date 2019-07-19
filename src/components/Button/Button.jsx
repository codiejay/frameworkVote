import React from 'react';
import classes from './Button.module.css';
const Button = props => {
  const { landingBtn, onClick, handleNewUser } = props;
  return (
    <button
      className={landingBtn === 'Custom' ? classes.Custom : classes.Button}
      onClick={onClick || handleNewUser}
    >
      {' '}
      {props.children}
    </button>
  );
};

export default Button;
