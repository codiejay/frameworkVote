import React from 'react';
import classes from './Vote.module.css';
import react from '../../../src/assets/react.svg';
import vue from '../../../src/assets/vue.svg';
// import ReactVote from '../FrameWorks/ReactVote/ReactVote';
// import VueVote from '../FrameWorks/VueVote/VueVote';
import Framework from '../FrameWorks/Framework';
class Vote extends React.Component {
  render() {
    return (
      <div className={classes.Vote}>
        <h1 className={classes.PageTitle}>Vote Count</h1>
        <div className={classes.Main}>
          <Framework name="React" src={react} alt="React Svg" />
          <Framework name="Vue" src={vue} alt="Vue Svg" />
        </div>
        <p className={classes.Info}>
          Last Dev to vote: {'James'} => {'React Js'}{' '}
        </p>
      </div>
    );
  }
}

export default Vote;
