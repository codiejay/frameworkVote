import React from 'react';
import classes from './Vote.module.css';
import ReactVote from '../FrameWorks/ReactVote/ReactVote';
import VueVote from '../FrameWorks/VueVote/VueVote';
class Vote extends React.Component {
  render() {
    return (
      <div className={classes.Vote}>
        <h1 className={classes.PageTitle}>Vote Count</h1>
        <div className={classes.Main}>
          <ReactVote />
          <VueVote />
        </div>
        <p className={classes.Info}>
          Last Dev to vote: {'James'} => {'React Js'}{' '}
        </p>
      </div>
    );
  }
}

export default Vote;
