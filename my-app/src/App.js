import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Graph from './Graph';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Form} />
          <Route exact path="/graph" component={Graph} />
        </div>
      </Router>
    );
  }
}

// export default App;
    