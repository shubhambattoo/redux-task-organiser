import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
const Header = lazy(() => import('./components/header/Header'));
const Home = lazy(() => import('./views/home/Home'));
const CreateBoard = lazy(() => import('./views/create-board/CreateBoard'));
const Board = lazy(() => import('./views/board/Board'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/createboard" component={CreateBoard} />
            <Route path="/board/:name" component={Board} />
            <Route exact path="*" component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
