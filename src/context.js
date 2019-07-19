import React, { Component } from 'react';
import { database } from './firebaseConfig.js';
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      return {
        ...state,
        votes: action.payload
      };
    case 'ADD_REACT_VOTE':
      return {
        ...state,
        reactVotes: action.payload
      };
    case 'ADD_VUE_VOTE':
      return {
        ...state,
        vueVotes: action.payload
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    voters: [],
    reactVotes: [],
    vueVotes: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  componentDidMount() {
    const voters = [],
      reactVotes = [],
      vueVotes = [];

    database
      .collection('votes')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          voters.push(doc.data());
        });
        this.setState({ voters: voters });
        for (let voter of voters) {
          if (voter.voteFor === 'ReactJs') {
            reactVotes.push(voter);
          } else {
            vueVotes.push(voter);
          }
        }
        this.setState({ reactVotes: reactVotes, vueVotes: vueVotes });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
