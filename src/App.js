import React from 'react';
import './App.css';
import Routes from './routes';
import { Router, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Routes />
      </Router>
    </React.Fragment>
  );
}

export default App;