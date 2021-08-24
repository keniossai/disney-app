import React from 'react';
import './App.css';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/detail' component={Details} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
