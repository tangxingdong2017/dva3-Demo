import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './pages/index';
import UserPage from './pages/user/index';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route
        	path="/"
        	exact
        	component={IndexPage}
        />
        <Route
        	path="/user/:userId"
        	component={UserPage}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
