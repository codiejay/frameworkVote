import React from 'react';
import classes from './Vote.module.css';
import react from '../../../src/assets/react.svg';
import vue from '../../../src/assets/vue.svg';
import Framework from '../FrameWorks/Framework';
import { Consumer } from '../../context';
import { database } from '../../firebaseConfig';
class Vote extends React.Component {
  handleCastVote = (dispatch, e, vote) => {
    const voters = [],
      reactVotes = [],
      vueVotes = [];
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    currentUser.voteFor = vote;
    console.log('Event', e);
    console.log('Dispatch', dispatch);

    database
      .collection('votes')
      .doc()
      .set(currentUser);

    database
      .collection('votes')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          voters.push(doc.data());
        });
        for (let voter of voters) {
          if (voter.voteFor === 'ReactJs') {
            reactVotes.push(voter);
          } else {
            vueVotes.push(voter);
          }
        }
        dispatch({ type: 'ADD_REACT_VOTE', payload: reactVotes });
        dispatch({ type: 'ADD_VUE_VOTE', payload: vueVotes });
        dispatch({ type: 'ADD_VOTE', payload: voters });
      });

    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  };
  handleReactVotes = (dispatch, e) => {
    const vote = 'ReactJs';
    this.handleCastVote(dispatch, e, vote);
  };
  handleVueVotes = (dispatch, e) => {
    const vote = 'VueJs';
    this.handleCastVote(dispatch, e, vote);
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className={classes.Vote}>
              <h1 className={classes.PageTitle}>Vote Count</h1>
              <div className={classes.Main}>
                <Framework
                  name="React"
                  src={react}
                  alt="React Svg"
                  handleCastVote={this.handleReactVotes.bind(this, dispatch)}
                />
                <Framework
                  name="Vue"
                  src={vue}
                  alt="Vue Svg"
                  handleCastVote={this.handleVueVotes.bind(this, dispatch)}
                />
              </div>
              <p className={classes.Info}>
                Last Dev to vote: {'James'} => {'React Js'}{' '}
              </p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Vote;
