import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Join/> }/>
        <Route path="/chat" render={(props) => <Chat {...props} /> }/>
      </Switch>
    </Router>
  );
}

export default App;
