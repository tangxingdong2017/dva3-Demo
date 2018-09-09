import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route
        	path="/"
        	exact
        	component={dynamic({
					  app,
					  models: () => [
					    import('./models/index'),
					  ],
					  component: () => import('./pages/index'),
					})}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
