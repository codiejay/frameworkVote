import React from 'react';
import react from '../../../assets/react.svg';
import Button from '../../UI/Button/Button';
import sound from '../../../assets/sound.mp3';
import classes from '../Framework.module.css';
import './ReactVote.css';
class ReactVote extends React.Component {
  handleCastVote = () => {
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  };
  render() {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.FlexMain}>
          <img className={classes.Image} src={react} alt="React Svg" />
          <Button onClick={this.handleCastVote}>React</Button>
        </div>

        <audio className={classes.Audio} src={sound} />
      </div>
    );
  }
}

export default ReactVote;
