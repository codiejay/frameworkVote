import React from 'react';
import Button from '../Button/Button';

import classes from './Framework.module.css';

// using Destructuring to grab "src, name, alt, handleCastVote" from props
const Framework = ({ src, name, alt, handleCastVote }) => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.FlexMain}>
        <img className={classes.Image} src={src} alt={alt} />
        <Button onClick={handleCastVote}>{name}</Button>
      </div>
    </div>
  );
};

export default Framework;
