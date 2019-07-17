import React from 'react';
import Landing from './components/Landing/Landing';

import { database } from './firebaseConfig';

import '../src/App.css';

class App extends React.Component {
  state = {
    voters: []
  };

  componentDidMount() {
    const voters = [];
    database
      .collection('framework-votes')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.ref);
          voters.push(doc.data());
        });
        this.setState({ voters: voters });
      })
      .catch(err => console.log(err));
  }

  handleSubmit = () => {
    database
      .collection('framework-votes')
      .doc()
      .set({
        name: 'alex',
        vote_for: 'vue',
        instagram_handle: 'vue_lover'
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch(error => {
        console.error('Error writing document: ', error);
      });
  };

  render() {
    return (
      <div className="App">
        <Landing handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
