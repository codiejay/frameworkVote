import React from 'react';
import Button from '../UI/Button/Button';
import sound from '../../../src/assets/sound.mp3';
import classes from './Framework.module.css';
class Framework extends React.Component {
  render() {
    const { src, name, alt, handleCastVote } = this.props;
    return (
      <div className={classes.Wrapper}>
        <div className={classes.FlexMain}>
          <img className={classes.Image} src={src} alt={alt} />
          <Button onClick={handleCastVote}>{name}</Button>
        </div>

        <audio className={classes.Audio} src={sound} />
      </div>
    );
  }
}

export default Framework;
