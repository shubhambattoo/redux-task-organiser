import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/guards/PrivateRoute';
import SignUp from './views/signUp/SignUp';
import Login from './views/login/Login';
import { Header } from './components/header/Header';
import { Home } from './views/home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
