import React, { Component } from 'react';
import { Consumer, Provider } from './context';
import Landing from './pages/Landing/Landing.jsx';
import Vote from './pages/Vote/Vote.jsx';

import '../src/App.css';
<<<<<<< HEAD
=======
import Result from './pages/Result/Result';

>>>>>>> 6e151ad158b2927e254de4d084a05856c646fc53
class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            const { route } = value;

            return (
              <div className="App">
                {route === 'landing' ? (
                  <Landing />
                ) : route === 'vote page' ? (
                  <Vote />
                ) : (
                  <Result />
                )}
              </div>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}

export default App;
