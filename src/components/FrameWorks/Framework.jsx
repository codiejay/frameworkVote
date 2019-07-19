import React from 'react';
import Button from '../UI/Button/Button';
import sound from '../../../src/assets/sound.mp3';
import classes from './Framework.module.css';
class Framework extends React.Component {
  handleCastVote = () => {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  };
  render() {
    const { src, name, alt } = this.props;
    return (
      <div className={classes.Wrapper}>
        <div className={classes.FlexMain}>
          <img className={classes.Image} src={src} alt={alt} />
          <Button onClick={this.handleCastVote}>{name}</Button>
        </div>

        <audio className={classes.Audio} src={sound} />
      </div>
    );
  }
}

export default Framework;
