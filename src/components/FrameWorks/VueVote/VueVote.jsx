import React from 'react';
import vue from '../../../assets/vue.svg';
import Button from '../../UI/Button/Button';
import sound from '../../../assets/sound.mp3';
import classes from '../Framework.module.css';
import './VueVote.css';

class VueVote extends React.Component {
  handleCastVote = () => {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  };
  render() {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.FlexMain}>
          <img className={classes.Image} src={vue} alt="React Svg" />
          <Button onClick={this.handleCastVote}>Vue</Button>
        </div>
        <div className={classes.Percentage}>
          <div className={classes.Water}>
            <div className={classes.Wave} />
          </div>
        </div>
        <audio className={classes.Audio} src={sound} />
      </div>
    );
  }
}

export default VueVote;
