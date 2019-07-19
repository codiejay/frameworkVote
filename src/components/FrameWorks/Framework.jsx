import React from 'react';
import Button from '../Button/Button';
import acme from '../../../src/assets/acme.wav';
import classes from './Framework.module.css';

const Framework = ({ src, name, alt, handleCastVote }) => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.FlexMain}>
        <img className={classes.Image} src={src} alt={alt} />
        <Button onClick={handleCastVote}>{name}</Button>
      </div>

      <audio className={classes.Audio} src={acme} />
    </div>
  );
};

export default Framework;
