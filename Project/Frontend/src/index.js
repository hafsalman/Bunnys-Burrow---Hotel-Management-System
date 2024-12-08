import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';


const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact>
        <div className="container">
          <h1>Welcome to Bunny's Burrow</h1>
          <a className="btn btn-login" href="/login">Login</a>
          <a className="btn btn-register" href="/register">Register</a>
        </div>
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));