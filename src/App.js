import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/guards/PrivateRoute';
import { AuthProvider } from './context/Auth';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUp from './views/signUp/SignUp';
import Login from './views/login/Login';
import { Header } from './components/header/Header';
import Home from './views/home/Home';
import CreateBoard from './views/create-board/CreateBoard';

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/createboard" component={CreateBoard} />
            <Route exact path="*" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
