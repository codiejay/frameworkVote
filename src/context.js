import React, { Component } from 'react';
import { database } from './firebaseConfig.js';
const Context = React.createContext();
console.log(Context);
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'ADD_VOTE':
      return {
        ...state,
        voters: action.payload
      };
    case 'CHANGE_ROUTE':
      return {
        ...state,
        route: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    voters: [],
    route: 'landing',
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  componentWillMount() {
    const voters = [];
    database
      .collection('votes')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          voters.push(doc.data());
        });

        this.setState({
          voters: voters
        });
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
