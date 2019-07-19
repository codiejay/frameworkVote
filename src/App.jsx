import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from './context';
import Landing from './components/Landing/Landing.jsx';
import Vote from './components/Vote/Vote.jsx';
import { database } from './firebaseConfig.js';

import '../src/App.css';

class App extends Component {
  state = {
    voters: [],
    reactVotes: [],
    vueVotes: []
  };
  // handleAddVoter = () => {
  //   const data = {
  //     Name:
  //   }
  //   database.collection("votes").doc().set(data);
  // };

  componentWillMount() {
    const voters = [],
      reactVotes = [],
      vueVotes = [];
    // Selecting with query
    // database
    //   .collection('votes')
    //   .where('voteFor', '==', 'ReactJs')
    //   .get()
    //   .then(docs => {
    //     docs.forEach(doc => {
    //       console.log(doc.data());
    //     });
    //   });

    // TO select a specific document .doc("doc name") to .collection
    database
      .collection('votes')
      .get()
      .then(docs => {
        docs.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data());
          voters.push(doc.data());
        });
        this.setState({ voters: voters });
        for (let voter of voters) {
          // console.log(voter);
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
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Landing} />
            <Route path="/vote" component={Vote} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
