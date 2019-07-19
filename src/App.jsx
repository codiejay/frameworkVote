import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from './context';
import Landing from './components/Landing/Landing.jsx';
import Vote from './components/Vote/Vote.jsx';

import '../src/App.css';

class App extends Component {
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
