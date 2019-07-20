import React, { Component } from 'react';
import { Consumer, Provider } from './context';
import Landing from './pages/Landing/Landing.jsx';
import Vote from './pages/Vote/Vote.jsx';

import '../src/App.css';
import Result from './pages/Result/Result';

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
