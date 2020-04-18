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
import { Board } from './views/board/Board';

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/createboard" component={CreateBoard} />
            <PrivateRoute path="/board/:name" component={Board} />
            <PrivateRoute exact path="*" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
