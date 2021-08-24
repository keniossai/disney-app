import React from 'react';
import './App.css';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/detail' component={Details} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
