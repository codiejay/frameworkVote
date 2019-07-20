import React from 'react';
import classes from './Vote.module.css';
import react from '../../../src/assets/react.svg';
import vue from '../../../src/assets/vue.svg';
import Framework from '../../components/FrameWorks/Framework';
import { Consumer } from '../../context';
import { database } from '../../firebaseConfig';

class Vote extends React.Component {
  handleCastVote = (dispatch, vote) => {
    const voters = [];
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    currentUser.voteFor = vote;

    // Sends currentUser user info and their vote to firebase
    database
      .collection('votes')
      .doc(currentUser.time)
      .set(currentUser);

    // Get all user info and their vote to firebase
    database
      .collection('votes')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          voters.push(doc.data());
        });
        dispatch({ type: 'ADD_VOTE', payload: voters });
        setTimeout(
          () => dispatch({ type: 'CHANGE_ROUTE', payload: 'result' }),
          1300
        );
      });

    // To get User IP Start of slack overflow code
    const IP = [];
    window.RTCPeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection;

    if (window.RTCPeerConnection) {
      const pc = new RTCPeerConnection(),
        noop = function() {};
      pc.createDataChannel('');
      pc.createOffer(pc.setLocalDescription.bind(pc), noop);
      pc.onicecandidate = event => {
        if (event.candidate) {
          IP.push(event.candidate.address);
        }
        localStorage.setItem('IP', IP);
      };
    }
    // End of slack overflow code

    // This gonna be use later to tell user that they've voted already
    localStorage.setItem('voted', true);

    // Plays the sound when user votes
    const audio = document.querySelector('audio');
    audio.currentTime = 0;
    audio.play();
  };
  handleReactVotes = dispatch => {
    const vote = 'ReactJs';
    this.handleCastVote(dispatch, vote);
  };
  handleVueVotes = dispatch => {
    const vote = 'VueJs';
    this.handleCastVote(dispatch, vote);
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          let nbr = 0;
          value.voters.map(pers => {
            return (nbr = nbr + 1);
          });
          return (
            <div className={classes.Vote}>
              <div className={classes.Title}>
                <h1 className={classes.PageTitle}>Vote Count</h1>
                <p style={{ fontSize: '1rem' }}>{nbr} People Voted</p>
              </div>

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
