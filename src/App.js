import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/guards/PrivateRoute';
import { AuthProvider } from './context/Auth';
import { Provider } from 'react-redux';
import store from './redux/store';
const SignUp = lazy(() => import('./views/signUp/SignUp'));
const Login = lazy(() => import('./views/login/Login'));
const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./views/home/Home'));
const CreateBoard = lazy(() => import('./views/create-board/CreateBoard'));
const Board = lazy(() => import('./views/board/Board'));

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/createboard" component={CreateBoard} />
              <PrivateRoute path="/board/:name" component={Board} />
              <PrivateRoute exact path="*" component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
