import React, {useState} from 'react';
import Products from './products';
import Home from './home';
import Nav from './nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

    <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
    </Router>

  );
}

export default App;
