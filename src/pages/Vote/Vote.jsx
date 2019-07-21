import React from 'react';
import classes from './Vote.module.css';
import react from '../../../src/assets/react.svg';
import vue from '../../../src/assets/vue.svg';
import spinner from '../../../src/assets/spinner.gif';
import Framework from '../../components/FrameWorks/Framework';
import { Consumer } from '../../context';
import { database } from '../../firebaseConfig';

class Vote extends React.Component {
  state = {
    isLoading: false
  };
  handleCastVote = (dispatch, vote) => {
    const voters = [];
    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    currentUser.voteFor = vote;

    this.setState({ isLoading: true });

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
          const { dispatch, voters } = value;
          const indexOfLastVote = voters.length - 1;
          let nbr = 0;
          voters.map(pers => {
            return (nbr = nbr + 1);
          });
          return (
            <div className={classes.Vote}>
              <div className={classes.Title}>
                <h1 className={classes.PageTitle}>Vote Count</h1>
                <strong>{nbr} People Voted</strong>
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
                Last Dev to vote:{' '}
                <span>{voters[indexOfLastVote].Name || 'Nobody yet'}</span> =>{' '}
                <span>{voters[indexOfLastVote].voteFor || 'Nothing yet'}</span>{' '}
              </p>
              {this.state.isLoading ? (
                <div className={classes.Spinner}>
                  <img src={spinner} alt="Loader" />
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Vote;
