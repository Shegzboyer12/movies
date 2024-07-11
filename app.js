// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import MovieDescription from './components/MovieDescription';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MovieDescription} />
      </Switch>
    </Router>
  );
}

export default App;
