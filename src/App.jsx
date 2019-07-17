import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Vote from './components/Vote/Vote.jsx';
import '../src/App.css';
function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/vote" exact component={Vote} />
    </div>
  );
}

export default App;
