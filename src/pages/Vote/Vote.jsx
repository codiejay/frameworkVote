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
        dispatch({ type: 'ADD_VOTE', payload: voters });
        setTimeout(
          () => dispatch({ type: 'CHANGE_ROUTE', payload: 'result' }),
          1300
        );
      });

    window.RTCPeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection; //compatibility for Firefox and chrome
    const pc = new RTCPeerConnection({ iceServers: [] }),
      noop = function() {};
    pc.createDataChannel(''); //create a bogus data channel
    pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
    pc.onicecandidate = ice => {
      if (ice && ice.candidate && ice.candidate.candidate) {
        const IP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(
          ice.candidate.candidate
        )[1];
        localStorage.setItem('IP', IP);
        pc.onicecandidate = noop;
      }
    };
    localStorage.setItem('voted', true);
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
